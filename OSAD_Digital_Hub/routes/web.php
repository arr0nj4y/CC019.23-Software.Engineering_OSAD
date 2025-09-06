<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrganizationManagementController;
use App\Http\Controllers\ActivityRequestController;
use App\Http\Controllers\ConsentManagementController;
use App\Http\Controllers\ActivityReportsController;

// The root URL will now render your login page.
Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('login');

// Add a distinct 'home' route.
Route::get('/home', function () {
    return Inertia::render('dashboard');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // The dashboard is accessible by all authenticated users
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // --- PROTECTED ROUTES ---
    
    // EXAMPLE 1: Only Directors (2) and Admins (3) can access this.
    Route::get('organization-management', [OrganizationManagementController::class, 'index'])
        ->middleware('role:2,3') // <-- Role protection added
        ->name('organization-management');
        
    // Assuming the following routes also need similar protection
    Route::get('organization-management/activity-requests', [ActivityRequestController::class, 'index'])
        ->middleware('role:1,2,3') // Example: Admin Assistants and up
        ->name('activity-requests');
        
    Route::get('organization-management/consent-management', [ConsentManagementController::class, 'index'])
        ->middleware('role:1,2,3') // Example: Admin Assistants and up
        ->name('consent-management');

    Route::get('organization-management/activity-reports', [ActivityReportsController::class, 'index'])
        ->middleware('role:1,2,3') // Example: Admin Assistants and up
        ->name('activity-reports');
});

// Ensure these files exist and contain your authentication and settings routes.
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';