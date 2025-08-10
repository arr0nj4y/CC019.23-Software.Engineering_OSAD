<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; // Make sure this is imported

class ActivityRequestController extends Controller
{
    /**
     * Display the activity request page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // This tells Inertia to render the 'activityrequest.tsx'
        // component from your 'resources/js/Pages' folder.
        return Inertia::render('activityrequest');
    }
}
