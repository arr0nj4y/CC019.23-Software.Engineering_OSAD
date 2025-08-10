import React from 'react';

// --- Reusable Deadline Item Component ---
interface DeadlineItemProps {
    title: string;
    subtitle: string;
    date: string;
    status: 'Pending' | 'Overdue';
}

const DeadlineItem = ({ title, subtitle, date, status }: DeadlineItemProps) => {
    const statusStyles = {
        Pending: { dot: 'bg-yellow-400', text: 'text-yellow-500' },
        Overdue: { dot: 'bg-red-500', text: 'text-red-500' },
    };
    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-4 ${statusStyles[status].dot}`}></span>
                <div>
                    <p className="font-semibold text-gray-800">{title}</p>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold text-gray-800">{date}</p>
                <p className={`text-sm font-bold ${statusStyles[status].text}`}>{status}</p>
            </div>
        </div>
    );
};


// --- Main Upcoming Deadlines Component ---
const UpcomingDeadlines = () => {
    // This data would typically come from your Laravel backend
    const deadlines = [
        { title: 'Spring Theater Performance', subtitle: 'Activity Request Due', date: 'March 20, 2025', status: 'Pending' as const },
        { title: 'Drama Workshop', subtitle: 'Activity Report Due', date: 'March 15, 2025', status: 'Overdue' as const },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Upcoming Deadlines</h3>
            <div>
                {deadlines.map(item => <DeadlineItem key={item.title} {...item} />)}
            </div>
        </div>
    );
};

export default UpcomingDeadlines;
