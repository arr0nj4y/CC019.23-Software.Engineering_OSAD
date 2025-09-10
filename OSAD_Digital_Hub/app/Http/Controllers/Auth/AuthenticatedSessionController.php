<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle login.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Authenticate and regenerate session
        $request->authenticate();
        $request->session()->regenerate();

        // Redirect to the dashboard or intended page
        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Handle logout.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Logs the user out
        Auth::guard('web')->logout();

        // Invalidate and regenerate session for security
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Redirect to login page with optional status message
        return redirect()
            ->route('login')
            ->withCookie(cookie()->forget('laravel_session'))
            ->withCookie(cookie()->forget('XSRF-TOKEN'));
    }
}
