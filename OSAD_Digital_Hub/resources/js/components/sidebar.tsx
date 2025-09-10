import React from 'react';
import { type User } from '@/types';
// @ts-ignore
import { Link, usePage } from '@inertiajs/react';

// --- Icon Components ---
const HomeIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const LockOpenIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75M3.75 21.75h16.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5z" />
  </svg>
);
const LogoutIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);
const UserIcon = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const Sidebar = ({ user }: { user: User }) => {
  const { url } = usePage();

  const allNavLinks = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard', allowedRoles: ['Student', 'Admin Assistant', 'OSAD Director', 'VP of Academics'] },
    { name: 'Apply for Role', icon: LockOpenIcon, href: '/apply-for-role', allowedRoles: ['Student'] },
    // ... other links
  ];

  const accessibleLinks = allNavLinks.filter(link =>
    link.allowedRoles.includes(user.user_role as string)
  );

  const getRoleName = (): string => {
    const userWithOrgs = user as any;
    if (userWithOrgs.organizations && userWithOrgs.organizations.length > 0) {
      const org = userWithOrgs.organizations[0];
      const roleInOrg = org?.pivot?.role;
      if (org?.name && roleInOrg) {
        return `${org.name} ${roleInOrg}`;
      }
    }
    return user.user_role as string;
  };

  // The `handleLogout` function is no longer needed with the <Link> component.

  return (
    <div className="flex flex-col h-screen w-64 bg-[#C83B51] text-white font-sans">
      {/* Profile Section */}
      <div className="flex items-center p-4 mt-4">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#C83B51] mr-4">
          <UserIcon className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-lg font-bold truncate">{user.name}</h2>
          <p className="text-sm">{getRoleName()}</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow mt-8 px-4">
        <ul>
          {accessibleLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <Link
                href={link.href}
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  url.startsWith(link.href)
                    ? 'bg-[#B03448]'
                    : 'hover:bg-[#B03448] hover:bg-opacity-50'
                }`}
              >
                <link.icon className="w-6 h-6 mr-4" />
                <span className="font-medium">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- FIX --- 
          Replaced the <button> with an Inertia <Link> component.
          - `method="post"` tells Inertia to send a POST request.
          - `as="button"` makes it behave like a button for accessibility while maintaining the link's functionality.
          This is the idiomatic and recommended way to handle logout actions.
      */}
      <div className="p-4 mb-4">
        <Link
          href="/logout"
          method="post"
          as="button"
          className="flex items-center p-3 w-full text-left rounded-lg transition-colors duration-200 hover:bg-[#B03448] hover:bg-opacity-50"
        >
          <LogoutIcon className="w-6 h-6 mr-4" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
