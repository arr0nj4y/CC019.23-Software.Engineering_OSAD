import React, { useState } from 'react';

// --- Helper Functions and Types ---
// This would typically be in a separate types file (e.g., '@/types')
type CalendarEvent = {
    id: number;
    date: string; // Format: YYYY-MM-DD
    title: string;
    type: 'Meeting' | 'Workshop';
};

const ChevronLeft = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const getEventTypeStyles = (type: CalendarEvent['type']) => {
    switch (type) {
        case 'Meeting':
            return 'bg-red-500 text-white';
        case 'Workshop':
            return 'bg-green-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
};

// --- Main Calendar Component ---
const DashboardCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // Set to April 2025

    // This event data would come from your Laravel backend
    const events: CalendarEvent[] = [
        { id: 1, date: '2025-04-02', title: 'Meeting', type: 'Meeting' },
        { id: 2, date: '2025-04-04', title: 'Workshop', type: 'Workshop' },
        { id: 3, date: '2025-04-09', title: 'Meeting', type: 'Meeting' },
        { id: 4, date: '2025-04-11', title: 'Workshop', type: 'Workshop' },
        { id: 5, date: '2025-04-16', title: 'Meeting', type: 'Meeting' },
        { id: 6, date: '2025-04-18', title: 'Workshop', type: 'Workshop' },
        { id: 7, date: '2025-04-23', title: 'Meeting', type: 'Meeting' },
        { id: 8, date: '2025-04-25', title: 'Workshop', type: 'Workshop' },
    ];

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const goToPreviousMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const goToNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const getEventsForDate = (day: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter(event => event.date === dateStr);
    };

    const renderCalendarDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(<div key={`empty-${i}`} className="border-r border-b border-gray-200"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEvents = getEventsForDate(day);
            days.push(
                <div key={day} className="relative p-2 border-r border-b border-gray-200 h-24 text-center">
                    <div className="text-sm font-medium">{day}</div>
                    <div className="mt-1 space-y-1">
                        {dayEvents.map(event => (
                            <div key={event.id} className={`mx-auto w-6 h-6 flex items-center justify-center text-xs rounded-full ${getEventTypeStyles(event.type)}`}>
                                {event.title.charAt(0)}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <button onClick={goToPreviousMonth} className="p-1 rounded-md hover:bg-gray-100">
                        <ChevronLeft />
                    </button>
                    <h3 className="text-lg font-bold text-gray-800 w-32 text-center">{monthNames[month]} {year}</h3>
                    <button onClick={goToNextMonth} className="p-1 rounded-md hover:bg-gray-100">
                        <ChevronRight />
                    </button>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600">
                    View Calendar
                </button>
            </div>
            <div className="grid grid-cols-7 border-t border-l border-gray-200">
                {weekDays.map(day => (
                    <div key={day} className="p-2 text-center text-sm font-semibold text-gray-500 bg-gray-50 border-r border-b border-gray-200">
                        {day}
                    </div>
                ))}
                {renderCalendarDays()}
            </div>
        </div>
    );
};

export default DashboardCalendar;
