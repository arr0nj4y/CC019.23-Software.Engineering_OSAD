import React from 'react';

// --- SVG Icons for this component ---
const PlusIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const DownloadIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const ResubmitIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-3.181-4.991-3.181-3.183a8.25 8.25 0 0 0-11.667 0L2.985 15.644Z" />
    </svg>
);

// --- Reusable Status Badge Component ---
const StatusBadge = ({ status }: { status: 'Pending' | 'Approved' | 'Rejected' }) => {
    const statusStyles = {
        Pending: 'bg-yellow-100 text-yellow-800',
        Approved: 'bg-green-100 text-green-800',
        Rejected: 'bg-red-100 text-red-800',
    };
    return (
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusStyles[status]}`}>
            {status}
        </span>
    );
};


// --- Main Consent Requests Table Component ---
const ConsentRequestsTable = () => {
    // This data would typically come from your Laravel backend
    const requests = [
        { id: 1, eventName: 'Summer Camp 2025', eventDate: 'June 15, 2025', status: 'Pending' as const },
        { id: 2, eventName: 'Field Trip', eventDate: 'May 20, 2025', status: 'Approved' as const },
        { id: 3, eventName: 'Sports Day', eventDate: 'April 10, 2025', status: 'Rejected' as const },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Parental Consent Template Requests</h2>
                <button className="flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    <PlusIcon /> New Request
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Event Name</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Event Date</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Status</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                <td className="py-4 px-2 font-semibold text-gray-700">{request.eventName}</td>
                                <td className="py-4 px-2 text-gray-600">{request.eventDate}</td>
                                <td className="py-4 px-2"><StatusBadge status={request.status} /></td>
                                <td className="py-4 px-2">
                                    <div className="flex items-center gap-3 text-blue-500 font-semibold">
                                        {request.status === 'Approved' && <button className="flex items-center gap-1 hover:underline"><DownloadIcon /> Download</button>}
                                        {request.status === 'Rejected' && <button className="flex items-center gap-1 hover:underline"><ResubmitIcon /> Resubmit</button>}
                                        {request.status === 'Pending' && <span className="text-gray-400">--</span>}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConsentRequestsTable;
