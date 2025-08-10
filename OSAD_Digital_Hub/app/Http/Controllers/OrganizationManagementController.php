<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationManagementController extends Controller
{
    public function index()
    {
        // FIX: Changed to all lowercase to match the filename.
        return Inertia::render('organizationmanagement');
    }
}