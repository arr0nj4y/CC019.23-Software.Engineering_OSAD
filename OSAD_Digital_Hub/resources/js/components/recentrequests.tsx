import React from 'react';

// --- SVG Icons for this component ---
const EyeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const PencilIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);

const ArrowPathIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-3.181-4.991-3.181-3.183a8.25 8.25 0 0 0-11.667 0L2.985 15.644Z" />
    </svg>
);

const PlusIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

// --- Reusable Status Badge Component ---
const StatusBadge = ({ status }: { status: 'Pending' | 'Approved' | 'Revisions' }) => {
    const statusStyles = {
        Pending: 'bg-yellow-100 text-yellow-800',
        Approved: 'bg-green-100 text-green-800',
        Revisions: 'bg-orange-100 text-orange-800',
    };
    return (
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusStyles[status]}`}>
            {status}
        </span>
    );
};


// --- Main Recent Requests Component ---
const RecentRequests = () => {
    // This data would typically come from your Laravel backend
    const requests = [
        { id: 1, eventName: 'Annual Tech Conference', dateSubmitted: 'Jan 15, 2025', status: 'Pending' as const, feedback: 'Awaiting review from OSAD Director' },
        { id: 2, eventName: 'Career Fair 2025', dateSubmitted: 'Jan 10, 2025', status: 'Approved' as const, feedback: 'Event approved by VP Academics' },
        { id: 3, eventName: 'Student Workshop', dateSubmitted: 'Jan 5, 2025', status: 'Revisions' as const, feedback: 'Incomplete budget information' },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Recent Requests</h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        <PlusIcon /> New Request
                    </button>
                     <button className="flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        <EyeIcon /> View All
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Event Name</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Date Submitted</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Status</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Feedback</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                <td className="py-4 px-2 font-semibold text-gray-700">{request.eventName}</td>
                                <td className="py-4 px-2 text-gray-600">{request.dateSubmitted}</td>
                                <td className="py-4 px-2"><StatusBadge status={request.status} /></td>
                                <td className="py-4 px-2 text-gray-600">{request.feedback}</td>
                                <td className="py-4 px-2">
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <button className="hover:text-blue-500"><EyeIcon /></button>
                                        {request.status !== 'Revisions' && <button className="hover:text-green-500"><PencilIcon /></button>}
                                        {request.status === 'Revisions' && <button className="hover:text-orange-500"><ArrowPathIcon /></button>}
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

export default RecentRequests;
