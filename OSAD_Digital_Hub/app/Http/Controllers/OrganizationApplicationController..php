<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\OrganizationApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationApplicationController extends Controller
{
    /**
     * Show the form for creating a new application.
     */
    public function create(): Response
    {
        // This fetches all organizations from your database and sends them
        // to the frontend so they can be displayed in a dropdown menu.
        return Inertia::render('Applications/ApplyForRole', [
            'organizations' => Organization::all(['id', 'name']),
        ]);
    }

    /**
     * Store a newly created application in storage.
     */
    public function store(Request $request)
    {
        // First, validate the incoming data to ensure it's safe and correct.
        $request->validate([
            'organization_id' => 'required|exists:organizations,id',
            'requested_role' => 'required|string|max:255',
            'message' => 'nullable|string|max:1000',
        ]);

        // This prevents a user from spamming multiple applications while one is pending.
        $existingApplication = OrganizationApplication::where('user_id', Auth::id())
            ->where('status', 'pending')
            ->first();

        if ($existingApplication) {
            // If they have a pending application, send back an error message.
            return redirect()->back()->with('error', 'You already have a pending application.');
        }

        // If validation passes and there's no pending application, create the new record.
        OrganizationApplication::create([
            'user_id' => Auth::id(), // Securely gets the ID of the logged-in user.
            'organization_id' => $request->organization_id,
            'requested_role' => $request->requested_role,
            'message' => $request->message,
            'status' => 'pending', // The application always starts as 'pending'.
        ]);

        // Redirect the user back to the form page with a success message.
        return redirect()->route('applications.create')->with('success', 'Application submitted successfully!');
    }
}

