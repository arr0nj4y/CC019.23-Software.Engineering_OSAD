<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrganizationManagementController;
use App\Http\Controllers\ActivityRequestController;
use App\Http\Controllers\ConsentManagementController;
use App\Http\Controllers\ActivityReportsController; // Add this line

// The root URL will now render your login page.
Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('login');

// Add a distinct 'home' route.
Route::get('/home', function () {
    return Inertia::render('dashboard'); 
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('organization-management', [OrganizationManagementController::class, 'index'])
        ->name('organization-management');

    Route::get('organization-management/activity-requests', [ActivityRequestController::class, 'index'])
        ->name('activity-requests');

    Route::get('organization-management/consent-management', [ConsentManagementController::class, 'index'])
        ->name('consent-management');

    // --- ADD THIS NEW ROUTE FOR ACTIVITY REPORTS ---
    Route::get('organization-management/activity-reports', [ActivityReportsController::class, 'index'])
        ->name('activity-reports');
});

// Ensure these files exist and contain your authentication and settings routes.
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';