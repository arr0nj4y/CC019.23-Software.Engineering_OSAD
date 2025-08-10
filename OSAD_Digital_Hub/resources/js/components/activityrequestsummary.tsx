import React from 'react';

// --- SVG Icons for the Cards ---

const TotalReportsIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#004687" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
    </svg>
);

const PendingReviewIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF7A30" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ApprovedIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#347433" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const NeedsRevisionIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B22222" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    </svg>
);

// --- Reusable Summary Card Component (Uniform Style) ---
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
                {/* FIX: Removed the 'uppercase' class */}
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: bgColor }}>
                 <Icon className="w-6 h-6" style={{ color: iconColor }} />
            </div>
        </div>
    );
};

// --- Main Component to hold all cards ---
const ActivityReportsSummary = () => {
    // This data would typically come from your Laravel backend
    const stats = [
        { title: "Total Reports", value: 247, icon: TotalReportsIcon, iconColor: '#1D4ED8', bgColor: '#BFDBFE' },
        { title: "Pending Review", value: 1, icon: PendingReviewIcon, iconColor: '#C2410C', bgColor: '#FED7AA' },
        { title: "Approved", value: 189, icon: ApprovedIcon, iconColor: '#15803D', bgColor: '#A7F3D0' },
        { title: "Needs Revision", value: 46, icon: NeedsRevisionIcon, iconColor: '#B91C1C', bgColor: '#FECACA' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default ActivityReportsSummary;
