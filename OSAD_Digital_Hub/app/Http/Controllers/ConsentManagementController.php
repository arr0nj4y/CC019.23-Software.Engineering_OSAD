<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; // Make sure this is imported

class ConsentManagementController extends Controller
{
    /**
     * Display the consent management page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // This tells Inertia to render the 'consentmanagement.tsx'
        // component from your 'resources/js/Pages' folder.
        return Inertia::render('consentmanagement');
    }
}
