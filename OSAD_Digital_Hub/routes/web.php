<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// The root URL will now render your login page.
// We're keeping its name as 'login' as per your existing setup.
// IMPORTANT: Ensure 'Auth/Login' matches the exact casing of your folder and file (e.g., resources/js/Pages/Auth/Login.tsx)
Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('login');

// Add a distinct 'home' route. This is often a dashboard or a general landing page.
// If you don't have a specific 'Home' component, you can direct it to 'dashboard'
// or create a simple 'Home' component (e.g., resources/js/Pages/Home.tsx).
Route::get('/home', function () {
    return Inertia::render('dashboard'); // Or 'Home' if you create that component
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Ensure these files exist and contain your authentication and settings routes.
require __DIR__.'/settings.php';
require __DIR__.'/auth.php'; // This file should contain the actual POST route for login.

