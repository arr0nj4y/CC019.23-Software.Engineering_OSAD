<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrganizationManagementController;
use App\Http\Controllers\ActivityRequestController;
use App\Http\Controllers\ConsentManagementController;
use App\Http\Controllers\ActivityReportsController;
use App\Http\Controllers\OrganizationApplicationController;

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

    // --- PROTECTED ROUTES (Updated with String Roles) ---
    
    // This route is now protected by role NAME instead of number.
    Route::get('organization-management', [OrganizationManagementController::class, 'index'])
        ->middleware('role:OSAD Director,VP of Academics') // <-- FIX
        ->name('organization-management');
        
    Route::get('organization-management/activity-requests', [ActivityRequestController::class, 'index'])
        ->middleware('role:Admin Assistant,OSAD Director,VP of Academics') // <-- FIX
        ->name('activity-requests');
        
    Route::get('organization-management/consent-management', [ConsentManagementController::class, 'index'])
        ->middleware('role:Admin Assistant,OSAD Director,VP of Academics') // <-- FIX
        ->name('consent-management');

    Route::get('organization-management/activity-reports', [ActivityReportsController::class, 'index'])
        ->middleware('role:Admin Assistant,OSAD Director,VP of Academics') // <-- FIX
        ->name('activity-reports');

    // --- ROUTES FOR STUDENT APPLICATIONS ---
    Route::get('/apply-for-role', [OrganizationApplicationController::class, 'create'])->name('applications.create');
    Route::post('/apply-for-role', [OrganizationApplicationController::class, 'store'])->name('applications.store');
});

// Ensure these files exist and contain your authentication and settings routes.
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

