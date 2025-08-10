import React, { useState } from 'react';

// --- SVG Icons for this component ---
const PlusIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);
const SearchIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);
const FilterIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
);
const ReportsIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
    </svg>
);
const PlanIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M12 12.75h.008v.008H12v-.008Z" />
    </svg>
);


// --- Reusable Status Badge Component ---
const StatusBadge = ({ status }: { status: 'Approved' | 'Pending' | 'Needs Revision' | 'Draft' }) => {
    const statusStyles = {
        Approved: 'bg-green-100 text-green-700',
        Pending: 'bg-yellow-100 text-yellow-700',
        'Needs Revision': 'bg-red-100 text-red-700',
        Draft: 'bg-gray-100 text-gray-600',
    };
    return (
        <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusStyles[status]}`}>
            {status}
        </span>
    );
};

// --- Main Activity Reports Table Component ---
const ActivityReportsTable = () => {
    const [activeTab, setActiveTab] = useState('Activity Reports');

    // This data would typically come from your Laravel backend
    const reports = [
        { id: 1, name: 'Drama Club Annual Performance', activityDate: 'Dec 15, 2024', submitted: 'Jan 10, 2025', status: 'Approved' as const },
        { id: 2, name: 'Workshop: Acting Fundamentals', activityDate: 'Jan 20, 2025', submitted: 'Jan 25, 2025', status: 'Pending' as const },
        { id: 3, name: 'Student Talent Show', activityDate: 'Nov 30, 2024', submitted: 'Dec 5, 2024', status: 'Needs Revision' as const },
        { id: 4, name: 'Theater Equipment Training', activityDate: 'Feb 10, 2025', submitted: '-', status: 'Draft' as const },
    ];
    
    const plans = [
        { id: 1, name: 'Annual Plan 2025', year: '2024-2025', submitted: 'Jan 15, 2025', status: 'Pending' as const },
        { id: 2, name: 'Annual Plan 2024', year: '2023-2024', submitted: 'Jan 10, 2024', status: 'Approved' as const },
        { id: 3, name: 'Annual Plan 2026', year: '2025-2026', submitted: 'Jan 5, 2026', status: 'Needs Revision' as const },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 px-6">
                    <button onClick={() => setActiveTab('Activity Reports')} className={`flex items-center gap-2 py-3 px-1 border-b-2 font-semibold text-sm ${activeTab === 'Activity Reports' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                        <ReportsIcon /> Activity Reports
                    </button>
                    <button onClick={() => setActiveTab('Annual Activity Plan')} className={`flex items-center gap-2 py-3 px-1 border-b-2 font-semibold text-sm ${activeTab === 'Annual Activity Plan' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                        <PlanIcon /> Annual Activity Plan
                    </button>
                </nav>
            </div>

            {/* Table Section */}
            <div className="p-6">
                {activeTab === 'Activity Reports' && (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Activity Reports</h2>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 bg-white text-gray-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
                                    <FilterIcon /> Filter
                                </button>
                                <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                    <PlusIcon /> Create Report
                                </button>
                            </div>
                        </div>
                        <div className="relative w-full max-w-md mb-4">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="text-gray-400" />
                            </div>
                            <input type="text" placeholder="Search activity reports..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Report Name</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Activity Date</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {reports.map((report) => (
                                        <tr key={report.id} className="hover:bg-gray-50">
                                            <td className="py-4 px-3 font-semibold text-gray-700 text-sm">{report.name}</td>
                                            <td className="py-4 px-3 text-gray-600 text-sm">{report.activityDate}</td>
                                            <td className="py-4 px-3 text-gray-600 text-sm">{report.submitted}</td>
                                            <td className="py-4 px-3"><StatusBadge status={report.status} /></td>
                                            <td className="py-4 px-3">
                                                <button className="bg-indigo-500 text-white text-xs font-bold py-1.5 px-4 rounded-lg hover:bg-indigo-600">View Details</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm text-gray-500">Showing 1-4 of 124 activity reports</p>
                            <div className="flex items-center gap-1">
                                <button className="px-3 py-1 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
                                <button className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 border border-blue-500 rounded-lg">1</button>
                                <button className="px-3 py-1 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                                <button className="px-3 py-1 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                                <button className="px-3 py-1 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'Annual Activity Plan' && (
                     <div>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Annual Activity Plan</h2>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 bg-white text-gray-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
                                    <FilterIcon /> Filter
                                </button>
                                <button className="flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                                    <PlusIcon /> Create Annual Plan
                                </button>
                            </div>
                        </div>
                        <div className="relative w-full max-w-md mb-4">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="text-gray-400" />
                            </div>
                            <input type="text" placeholder="Search annual plans..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm" />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Plan Name</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Academic Year</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Submission Date</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="py-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {plans.map((plan) => (
                                        <tr key={plan.id} className="hover:bg-gray-50">
                                            <td className="py-4 px-3 font-semibold text-gray-700 text-sm">{plan.name}</td>
                                            <td className="py-4 px-3 text-gray-600 text-sm">{plan.year}</td>
                                            <td className="py-4 px-3 text-gray-600 text-sm">{plan.submitted}</td>
                                            <td className="py-4 px-3"><StatusBadge status={plan.status} /></td>
                                            <td className="py-4 px-3">
                                                <button className="bg-indigo-500 text-white text-xs font-bold py-1.5 px-4 rounded-lg hover:bg-indigo-600">View Details</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm text-gray-500">Showing 1-3 of 3 annual plans</p>
                            <div className="flex items-center gap-1">
                                <button className="px-3 py-1 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
                                <button className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 border border-blue-500 rounded-lg">1</button>
                                <button className="px-3 py-1 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActivityReportsTable;
