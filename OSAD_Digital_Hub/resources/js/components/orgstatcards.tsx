import React from 'react';

// --- New SVG Icons for the Cards ---

const ActivityRequestIcon = ({ className = 'w-20 h-20' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
);

const ConsentFormIcon = ({ className = 'w-20 h-20' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
    </svg>
);

const ActivityReportIcon = ({ className = 'w-20 h-20' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375Zm10.5 1.875a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Zm-4.5 5.25a.75.75 0 0 0 0 1.5h.375c.769 0 1.43.463 1.719 1.125H9.75a.75.75 0 0 0 0 1.5h2.094a1.875 1.875 0 0 1-1.719 1.125H9.75a.75.75 0 0 0-.53 1.28l2.25 2.25a.75.75 0 0 0 1.06-1.06l-1.193-1.194a3.382 3.382 0 0 0 2.08-2.401h.833a.75.75 0 0 0 0-1.5h-.834A3.357 3.357 0 0 0 12.932 12h1.318a.75.75 0 0 0 0-1.5H10.5c-.04 0-.08.003-.12.01a3.425 3.425 0 0 0-.255-.01H9.75Z" clipRule="evenodd" />
    </svg>
);


// --- Reusable Stat Card Component ---
interface StatCardProps {
    title: string;
    icon: React.ElementType;
    approved: number;
    pending: number;
    rejected: number;
}

const StatCard = ({ title, icon: Icon, approved, pending, rejected }: StatCardProps) => (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
        <Icon className="w-20 h-20 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
        <div className="flex justify-around items-end w-full">
            <div className="text-center">
                <p className="text-3xl font-bold text-green-500">{approved}</p>
                <p className="text-xs text-gray-500">Approved</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">{pending}</p>
                <p className="text-xs text-gray-500">Pending</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-red-500">{rejected}</p>
                <p className="text-xs text-gray-500">Rejected</p>
            </div>
        </div>
    </div>
);

// --- Main Component to hold all cards ---
const OrgStatCards = () => {
    // This data would typically come from your Laravel backend
    const stats = [
        { title: "Activity Requests", icon: ActivityRequestIcon, approved: 5, pending: 2, rejected: 1 },
        { title: "Consent Forms", icon: ConsentFormIcon, approved: 12, pending: 3, rejected: 0 },
        { title: "Activity Reports", icon: ActivityReportIcon, approved: 8, pending: 1, rejected: 2 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    icon={stat.icon}
                    approved={stat.approved}
                    pending={stat.pending}
                    rejected={stat.rejected}
                />
            ))}
        </div>
    );
};

export default OrgStatCards;
