<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrganizationManagementController;
use App\Http\Controllers\ActivityRequestController;
use App\Http\Controllers\ConsentManagementController;
use App\Http\Controllers\ActivityReportsController;
use App\Http\Controllers\OrganizationApplicationController;
use App\Http\Controllers\Auth\AuthenticatedSessionController; // ✅ Use the existing controller for logout

// --- Public Routes ---
// Root URL renders your login page
Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('login');

// Optional 'home' route (can be used as a landing page)
Route::get('/home', function () {
    return Inertia::render('dashboard');
})->name('home');

// ✅ Logout route (POST)
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy']);

// --- Protected Routes ---
Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard for authenticated users
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // --- PROTECTED ROUTES (Role-based) ---
    Route::get('/organization-management', [OrganizationManagementController::class, 'index'])
        ->middleware('role:OSAD Director,VP of Academics')
        ->name('organization-management');
        
    Route::get('/organization-management/activity-requests', [ActivityRequestController::class, 'index'])
        ->middleware('role:Admin Assistant,OSAD Director,VP of Academics')
        ->name('activity-requests');
        
    Route::get('/organization-management/consent-management', [ConsentManagementController::class, 'index'])
        ->middleware('role:Admin Assistant,OSAD Director,VP of Academics')
        ->name('consent-management');

    Route::get('/organization-management/activity-reports', [ActivityReportsController::class, 'index'])
        ->middleware('role:Admin Assistant,OSAD Director,VP of Academics')
        ->name('activity-reports');

    // --- Student Applications ---
    Route::get('/apply-for-role', [OrganizationApplicationController::class, 'create'])
        ->name('applications.create');
    Route::post('/apply-for-role', [OrganizationApplicationController::class, 'store'])
        ->name('applications.store');
});

// Include additional route files for settings and auth
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
