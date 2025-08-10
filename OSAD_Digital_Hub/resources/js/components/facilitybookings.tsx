import React, { useState } from 'react';

// --- Reusable Status Badge Component ---
interface StatusBadgeProps {
    status: 'Pending' | 'Approved' | 'Rejected';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
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


// --- Main Facility Bookings Component ---
const FacilityBookings = () => {
    const [activeFilter, setActiveFilter] = useState('Day');

    // This data would typically come from your Laravel backend
    const bookings = [
        { id: 1, room: 'Lab 3', purpose: 'Research', duration: '4 Hours', status: 'Pending' as const },
        { id: 2, room: 'Room 301', purpose: 'Team Meeting', duration: '2 Hours', status: 'Approved' as const },
        { id: 3, room: 'Room 205', purpose: 'Study Group', duration: '1.5 Hours', status: 'Rejected' as const },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Facility Bookings</h2>
                <div className="flex items-center bg-gray-100 p-1 rounded-lg">
                    {['Week', 'Month', 'Day'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors duration-200 ${
                                activeFilter === filter
                                    ? 'bg-white text-gray-800 shadow-sm'
                                    : 'bg-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bookings Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Room</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Purpose</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Duration</th>
                            <th className="py-3 px-2 text-sm font-semibold text-gray-500">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id} className="border-b border-gray-200 last:border-b-0">
                                <td className="py-4 px-2 font-bold text-gray-800">{booking.room}</td>
                                <td className="py-4 px-2 text-gray-600">{booking.purpose}</td>
                                <td className="py-4 px-2 text-gray-600">{booking.duration}</td>
                                <td className="py-4 px-2">
                                    <StatusBadge status={booking.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FacilityBookings;
