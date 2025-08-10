import React from 'react';

// --- SVG Icons for the Cards ---

const BookOpenIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#004687" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m0 0a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 18V6.253m18 0V18a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V6.253m0 0A2.25 2.25 0 0018.75 4H5.25A2.25 2.25 0 003 6.253v11.494" />
    </svg>
);

const ClockIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#FF7A30" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DocumentCheckIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#347433" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DocumentMagnifyingGlassIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B22222" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5 4.5l-2.25-2.25m6-3a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);


// --- Individual Card Component ---
interface SummaryCardProps {
    icon: React.ElementType;
    title: string;
    value: number;
    color: string;
}

const SummaryCard = ({ icon: Icon, title, value, color }: SummaryCardProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-lg`} style={{ backgroundColor: `${color}20` }}>
                <Icon className="w-8 h-8" style={{ color: color }} />
            </div>
            <div>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </div>
    );
};


// --- Main Component to hold all cards ---
const SummaryCards = () => {
    // This data would typically come from your Laravel backend as props
    const stats = [
        {
            icon: BookOpenIcon,
            title: 'Total Bookings',
            value: 847,
            color: '#3B82F6', // Blue
        },
        {
            icon: ClockIcon,
            title: 'Pending Concerns',
            value: 24,
            color: '#F97316', // Orange
        },
        {
            icon: DocumentMagnifyingGlassIcon,
            title: 'Concerns Submitted',
            value: 56,
            color: '#8B5CF6', // Purple
        },
        {
            icon: DocumentCheckIcon,
            title: 'Resolved Concerns',
            value: 423,
            color: '#10B981', // Green
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
                <SummaryCard
                    key={stat.title}
                    icon={stat.icon}
                    title={stat.title}
                    value={stat.value}
                    color={stat.color}
                />
            ))}
        </div>
    );
};

export default SummaryCards;
