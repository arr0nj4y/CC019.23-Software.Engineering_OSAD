import React from 'react';

// --- SVG Icons for the Cards (for consistency) ---

const TotalRequestsIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#004687" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const PendingIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF7A30" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ApprovedIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#347433" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const RejectedIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B22222" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);


// --- Reusable Summary Card Component ---
interface SummaryCardProps {
    title: string;
    value: number;
    icon: React.ElementType;
    iconColor: string;
    bgColor: string;
}

const SummaryCard = ({ title, value, icon: Icon, iconColor, bgColor }: SummaryCardProps) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
            <div className={`p-3 rounded-lg`} style={{ backgroundColor: bgColor }}>
                 <Icon className="w-6 h-6" style={{ color: iconColor }} />
            </div>
        </div>
    );
};


// --- Main Component to hold all cards ---
const ConsentSummaryCards = () => {
    // This data would typically come from your Laravel backend
    const stats = [
        { title: "Total Requests", value: 24, icon: TotalRequestsIcon, iconColor: '#1D4ED8', bgColor: '#BFDBFE' },
        { title: "Pending", value: 8, icon: PendingIcon, iconColor: '#C2410C', bgColor: '#FED7AA' },
        { title: "Approved", value: 12, icon: ApprovedIcon, iconColor: '#15803D', bgColor: '#A7F3D0' },
        { title: "Rejected", value: 4, icon: RejectedIcon, iconColor: '#B91C1C', bgColor: '#FECACA' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <SummaryCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    iconColor={stat.iconColor}
                    bgColor={stat.bgColor}
                />
            ))}
        </div>
    );
};

export default ConsentSummaryCards;
