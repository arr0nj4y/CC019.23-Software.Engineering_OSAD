<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        if (! Auth::check()) {
            return redirect('login');
        }

        // Get the user's role from the new 'user_role' column.
        $userRole = $request->user()->user_role;

        // The $roles variable is now an array of strings passed from your route,
        // e.g., ['OSAD Director', 'VP of Academics'].
        // We check if the user's role is in the list of allowed roles.
        if (in_array($userRole, $roles)) {
            return $next($request);
        }

        // If the user's role is not in the list, block them.
        abort(403, 'Unauthorized Action');
    }
}
