import React from 'react';

// --- SVG Icons for the Buttons ---
const PlusIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const UploadIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

// --- Main Quick Actions Component ---
const QuickActions = () => {
    return (
        <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusIcon /> New Activity Request
                </button>
                <button className="flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusIcon /> Request Consent Template
                </button>
                <button className="flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    <UploadIcon /> Upload Activity Report
                </button>
            </div>
        </div>
    );
};

export default QuickActions;
