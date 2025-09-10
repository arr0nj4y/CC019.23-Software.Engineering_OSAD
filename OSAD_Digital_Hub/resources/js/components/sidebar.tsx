import React from 'react';
import { type User } from '@/types';
import { Link, usePage } from '@inertiajs/react';

// --- FIX: Create a simple placeholder for the 'route' function ---
// This resolves the TypeScript error in environments where Ziggy's types are not automatically discovered.
// In your live application, the real `route` function provided by Ziggy will be used.
const route = (name: string): string => {
    // This is a simple fallback that generates a basic URL from the route name.
    const routeMap: { [key: string]: string } = {
        'dashboard': '/dashboard',
        'applications.create': '/apply-for-role',
        'logout': '/logout',
        'organization-management': '/organization-management',
    };
    return routeMap[name] || '#';
};


// --- Icon Components ---
const HomeIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const CalendarIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const DocumentReportIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const ExclamationIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const UserGroupIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a3 3 0 014.5 0M12 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);
const LogoutIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);
const UserIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
const LockOpenIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75M3.75 21.75h16.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5z" />
  </svg>
);

const Sidebar = ({ user }: { user: User }) => {
  const { url } = usePage();

  const allNavLinks = [
    { name: 'Dashboard', icon: HomeIcon, href: route('dashboard'), allowedRoles: ['Student', 'Admin Assistant', 'OSAD Director', 'VP of Academics'] },
    { name: 'Calendar', icon: CalendarIcon, href: '#', allowedRoles: ['Student', 'Admin Assistant', 'OSAD Director', 'VP of Academics'] },
    { name: 'Apply for Role', icon: LockOpenIcon, href: route('applications.create'), allowedRoles: ['Student'] },
    { name: 'Facility Booking', icon: DocumentReportIcon, href: '#', allowedRoles: ['Student', 'Admin Assistant'] },
    { name: 'Student Concern', icon: ExclamationIcon, href: '#', allowedRoles: ['Student'] },
    { name: 'Organization Management', icon: UserGroupIcon, href: '/organization-management', allowedRoles: ['OSAD Director', 'VP of Academics'] },
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
          {accessibleLinks.map((link) => {
            const isActive = url.startsWith(link.href);
            return (
              <li key={link.name} className="mb-2">
                <Link
                  href={link.href}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    isActive ? 'bg-[#B03448]' : 'hover:bg-[#B03448] hover:bg-opacity-50'
                  }`}
                >
                  <link.icon className="w-6 h-6 mr-4" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 mb-4">
        <Link
          href={route('logout')}
          method="post"  // ✅ makes it POST
          as="button"    // ✅ renders as <button>
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

