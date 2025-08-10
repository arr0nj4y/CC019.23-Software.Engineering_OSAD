<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; // Make sure this is imported

class ActivityReportsController extends Controller
{
    /**
     * Display the activity reports page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // This tells Inertia to render the 'activityreports.tsx'
        // component from your 'resources/js/Pages' folder.
        return Inertia::render('activityreports');
    }
}
