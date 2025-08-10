import React, { useState, ReactNode, useEffect, useRef } from 'react';
import { type User } from '@/types';
import { usePage, Link, router } from '@inertiajs/react';

// --- SVG Icons (Combined from Sidebar and Header) ---

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

const LogoIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#C83B51"/>
        <path d="M26.25 19.9999L16.875 25.1819V14.818L26.25 19.9999Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BellIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const SettingsIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);


// --- Reusable Components (Internal to this Layout) ---

const Sidebar = ({ user }: { user: User }) => {
    const { url } = usePage();
    
    const navLinks = [
        { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
        { name: 'Calendar', icon: CalendarIcon, href: '/calendar' },
        { name: 'Facility Booking', icon: DocumentReportIcon, href: '/facility-booking' },
        { name: 'Student Concern', icon: ExclamationIcon, href: '/student-concern' },
        {
            name: 'Organization Management',
            icon: UserGroupIcon,
            href: '/organization-management',
            subLinks: [
                { name: 'Activity Requests', href: '/organization-management/activity-requests' },
                { name: 'Consent Management', href: '/organization-management/consent-management' },
                { name: 'Activity Reports', href: '/organization-management/activity-reports' },
            ],
        },
    ];
    
    const [openDropdown, setOpenDropdown] = useState('');
    const manualCloseRef = useRef(false);

    useEffect(() => {
        if (manualCloseRef.current) {
            manualCloseRef.current = false;
            return;
        }
        const activeParent = navLinks.find(link => link.subLinks && url.startsWith(link.href))?.name;
        setOpenDropdown(activeParent || '');
    }, [url]);

    const getRoleName = (level: number) => {
        switch (level) {
            case 0: return 'Student';
            case 1: return 'Director';
            case 2: return 'VP of Academics';
            case 3: return 'Admin';
            default: return 'User';
        }
    };

    const handleParentLinkClick = (e: React.MouseEvent, link: (typeof navLinks)[0]) => {
        e.preventDefault();
        const { name, href } = link;
        const isDropdownOpen = openDropdown === name;
        const isOnChildPage = url.startsWith(href) && url !== href;

        if (isOnChildPage) {
            manualCloseRef.current = true;
            setOpenDropdown('');
            router.visit(href);
        } else {
            setOpenDropdown(isDropdownOpen ? '' : name);
            if (url !== href) {
                router.visit(href);
            }
        }
    };

    return (
        <div className="flex flex-col h-screen w-64 bg-[#C83B51] text-white font-sans flex-shrink-0">
            <div className="flex items-center p-4 mt-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#C83B51] mr-4 overflow-hidden">
                    {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                        <UserIcon className="w-8 h-8" />
                    )}
                </div>
                <div>
                    <h2 className="text-lg font-bold truncate">{user.name}</h2>
                    <p className="text-sm truncate">{getRoleName(user.user_level as number)}</p>
                </div>
            </div>
            <nav className="flex-grow mt-8 px-4">
                <ul>
                    {navLinks.map((link) => {
                        const isActive = url.startsWith(link.href);
                        const isOpen = openDropdown === link.name;

                        return (
                            <li key={link.name} className="mb-1">
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        if (link.subLinks) {
                                            handleParentLinkClick(e, link);
                                        } else {
                                            e.preventDefault();
                                            router.visit(link.href);
                                        }
                                    }}
                                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 cursor-pointer ${
                                        isActive ? 'bg-[#B03448]' : 'hover:bg-[#B03448] hover:bg-opacity-50'
                                    }`}
                                >
                                    <link.icon className="w-6 h-6 mr-4" />
                                    <span className="font-medium">{link.name}</span>
                                </a>
                                
                                {link.subLinks && (
                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                        <ul className="relative mt-2 ml-6 pl-7 space-y-1 border-l border-red-300/50">
                                            {link.subLinks.map((subLink) => {
                                                const isSubActive = url === subLink.href;
                                                return (
                                                    <li key={subLink.name}>
                                                        <Link
                                                            href={subLink.href}
                                                            className={`block py-2 px-3 rounded-lg text-sm transition-colors duration-200 ${
                                                                isSubActive
                                                                    ? 'bg-white text-red-600 font-bold'
                                                                    : 'text-red-200 hover:text-white'
                                                            }`}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="p-4 mb-4">
                <Link href="/logout" className="flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-[#B03448] hover:bg-opacity-50">
                    <LogoutIcon className="w-6 h-6 mr-4" />
                    <span className="font-medium">Logout</span>
                </Link>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <header className="bg-white shadow-sm w-full flex-shrink-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <LogoIcon />
                        <h1 className="ml-3 text-xl font-bold text-gray-800">OSAD Digital Hub</h1>
                    </div>
                    <div className="flex items-center space-x-5">
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <BellIcon className="w-6 h-6" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <SettingsIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


// --- Main Authenticated Layout Component ---

interface AuthenticatedLayoutProps {
    children: ReactNode;
    user: User;
}

const AuthenticatedLayout = ({ user, children }: AuthenticatedLayoutProps) => {
    return (
        <div className="flex bg-gray-100 h-screen">
            <Sidebar user={user} />
            <div className="flex-grow flex flex-col">
                <Header />
                <main className="flex-grow p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
