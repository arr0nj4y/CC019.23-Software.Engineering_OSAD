import React from 'react';

// --- Reusable Bar Chart Card Component ---
interface BarChartCardProps {
    title: string;
    data: {
        label: string;
        value: number;
    }[];
}

const BarChartCard = ({ title, data }: BarChartCardProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
            <div className="space-y-4">
                {data.map((item) => (
                    <div key={item.label}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">{item.label}</span>
                            <span className="text-sm font-semibold text-gray-500">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-red-500 h-2 rounded-full"
                                style={{ width: `${item.value}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main Analytics Charts Component ---
const AnalyticsCharts = () => {
    // This data would typically come from your Laravel backend
    const concernTrendsData = [
        { label: 'Incomplete Uniform', value: 75 },
        { label: 'Grooming violation', value: 50 },
        { label: 'Facility Misuse', value: 25 },
        { label: 'Escalated', value: 25 },
    ];

    const mostBookedData = [
        { label: 'Main Auditorium', value: 75 },
        { label: 'Mini Auditorium', value: 50 },
        { label: 'Main Lobby', value: 25 },
        { label: 'Farmville', value: 25 },
    ];

    const compliantOrgsData = [
        { label: 'F.A.C.E.S.', value: 75 },
        { label: 'GDG', value: 50 },
        { label: 'SITES', value: 25 },
        { label: 'RS', value: 25 },
    ];

    return (
        <div className="flex flex-col gap-6">
            <BarChartCard title="Concern Trends" data={concernTrendsData} />
            <BarChartCard title="Most Booked Facility" data={mostBookedData} />
            <BarChartCard title="Fully Compliant Organization" data={compliantOrgsData} />
        </div>
    );
};

export default AnalyticsCharts;
