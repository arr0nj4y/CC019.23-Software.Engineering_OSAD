import React, { useState } from 'react';

// It's good practice to define types for props, even if they are empty for now.
type Props = {};

// Main component for the OSAD Digital Hub Dashboard
const OsadDigitalHub: React.FC<Props> = () => {
    // State to manage the visibility of the sidebar on mobile devices
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="antialiased text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="relative flex h-screen bg-gray-100">
                {/* Sidebar */}
                {/* The sidebar is conditionally rendered based on screen size and state */}
                <aside
                    className={`w-64 flex-shrink-0 bg-[#c62f49] text-white flex-col transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? 'flex' : 'hidden'
                    } lg:flex absolute lg:relative z-20`}
                >
                    {/* User Profile */}
                    <div className="flex items-center p-4 mt-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c62f49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div className="ml-4">
                            <p className="font-bold text-lg">Sarah Johnson</p>
                            <p className="text-sm text-gray-300">Drama Club Rep</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-8 flex-1 px-2 space-y-2">
                        <a href="#" className="flex items-center px-4 py-2.5 text-white bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c62f49] focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c62f49] focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            Calendar
                        </a>
                        <a href="#" className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c62f49] focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>
                            Facility Booking
                        </a>
                        <a href="#" className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c62f49] focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                            Student Concern
                        </a>
                        <a href="#" className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c62f49] focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            Organization Management
                        </a>
                    </nav>

                    {/* Logout */}
                    <div className="p-4">
                        <a href="#" className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c62f49] focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                            Logout
                        </a>
                    </div>
                </aside>
                
                {/* Overlay for mobile when sidebar is open */}
                {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="flex justify-between items-center p-4 bg-white border-b">
                        <div className="flex items-center">
                            {/* Hamburger menu button for mobile */}
                            <button className="lg:hidden p-2 mr-2 rounded-md hover:bg-gray-100" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                            </button>
                            <img src="https://placehold.co/40x40/c62f49/FFFFFF?text=O" alt="OSAD Logo" className="w-10 h-10 rounded-lg"/>
                            <h1 className="text-xl font-bold text-gray-800 ml-3">OSAD Digital Hub</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                        </div>
                    </header>

                    {/* Main content scrollable area */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 lg:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                            {/* Stat Cards */}
                            <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>} title="Total Bookings" value="847" color="blue" />
                            <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-500"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>} title="Pending Concerns" value="24" color="yellow" />
                            <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-indigo-500"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l.79-.79"/></svg>} title="Concerns Submitted" value="56" color="indigo" />
                            <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500"><polyline points="20 6 9 17 4 12"/></svg>} title="Resolved Concerns" value="423" color="green" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Side (Bookings & Calendar) */}
                            <div className="lg:col-span-2 space-y-6">
                                <FacilityBookings />
                                <Calendar />
                            </div>

                            {/* Right Sidebar (Analytics) */}
                            <div className="space-y-6">
                                <ConcernTrends />
                                <MostBookedFacility />
                                <FullyCompliantOrganization />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

// Sub-components for better organization

const StatCard: React.FC<{ icon: React.ReactNode, title: string, value: string, color: string }> = ({ icon, title, value, color }) => (
    <div className="bg-white p-5 rounded-xl shadow-sm flex items-center space-x-4">
        <div className={`bg-${color}-100 p-3 rounded-lg`}>{icon}</div>
        <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-gray-500">{title}</p>
        </div>
    </div>
);

const FacilityBookings: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Facility Bookings</h2>
            <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
                <button className="px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]">Week</button>
                <button className="px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]">Month</button>
                <button className="px-3 py-1 text-sm rounded-md bg-[#c62f49] shadow-sm text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]">Day</button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500 text-sm">
                        <th className="py-2 font-medium">Room</th>
                        <th className="py-2 font-medium">Purpose</th>
                        <th className="py-2 font-medium">Duration</th>
                        <th className="py-2 font-medium">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="py-3 font-semibold">Lab 3</td>
                        <td className="py-3">Research</td>
                        <td className="py-3">4 Hours</td>
                        <td className="py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Pending</span></td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-3 font-semibold">Room 301</td>
                        <td className="py-3">Team Meeting</td>
                        <td className="py-3">2 Hours</td>
                        <td className="py-3"><span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Approved</span></td>
                    </tr>
                    <tr>
                        <td className="py-3 font-semibold">Room 205</td>
                        <td className="py-3">Study Group</td>
                        <td className="py-3">1.5 Hours</td>
                        <td className="py-3"><span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Rejected</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const Calendar: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg></button>
                <h2 className="text-lg font-bold">April 2025</h2>
                <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg></button>
            </div>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-[#c62f49] rounded-lg hover:bg-[#b02a40] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c62f49]">View Calendar</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="text-gray-500 font-medium py-2">Sun</div>
            <div className="text-gray-500 font-medium py-2">Mon</div>
            <div className="text-gray-500 font-medium py-2">Tue</div>
            <div className="text-gray-500 font-medium py-2">Wed</div>
            <div className="text-gray-500 font-medium py-2">Thu</div>
            <div className="text-gray-500 font-medium py-2">Fri</div>
            <div className="text-gray-500 font-medium py-2">Sat</div>
            
            {/* Calendar Days */}
            <div className="py-2 text-gray-400">30</div>
            <div className="py-2 text-gray-400">31</div>
            <div className="py-2">1</div>
            <div className="py-2 relative"><span className="bg-[#c62f49] text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">2</span><span className="text-[#c62f49] text-xs absolute bottom-[-10px] left-0 right-0">Meeting</span></div>
            <div className="py-2">3</div>
            <div className="py-2 relative"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">4</span><span className="text-green-600 text-xs absolute bottom-[-10px] left-0 right-0">Workshop</span></div>
            <div className="py-2">5</div>
            <div className="py-2">6</div>
            <div className="py-2">7</div>
            <div className="py-2">8</div>
            <div className="py-2 relative"><span className="bg-[#c62f49] text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">9</span><span className="text-[#c62f49] text-xs absolute bottom-[-10px] left-0 right-0">Meeting</span></div>
            <div className="py-2">10</div>
            <div className="py-2 relative"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">11</span><span className="text-green-600 text-xs absolute bottom-[-10px] left-0 right-0">Workshop</span></div>
            <div className="py-2">12</div>
            <div className="py-2">13</div>
            <div className="py-2">14</div>
            <div className="py-2">15</div>
            <div className="py-2 relative"><span className="bg-[#c62f49] text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">16</span><span className="text-[#c62f49] text-xs absolute bottom-[-10px] left-0 right-0">Meeting</span></div>
            <div className="py-2">17</div>
            <div className="py-2 relative"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">18</span><span className="text-green-600 text-xs absolute bottom-[-10px] left-0 right-0">Workshop</span></div>
            <div className="py-2">19</div>
            <div className="py-2">20</div>
            <div className="py-2">21</div>
            <div className="py-2">22</div>
            <div className="py-2">23</div>
            <div className="py-2">24</div>
            <div className="py-2">25</div>
            <div className="py-2">26</div>
            <div className="py-2">27</div>
            <div className="py-2">28</div>
            <div className="py-2">29</div>
            <div className="py-2">30</div>
        </div>
    </div>
);

const ProgressBar: React.FC<{ label: string, percentage: number }> = ({ label, percentage }) => (
    <div className="text-sm">
        <div className="flex justify-between mb-1"><span>{label}</span><span>{percentage}%</span></div>
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#c62f49] h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const ConcernTrends: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold mb-4">Concern Trends</h2>
        <div className="space-y-4">
            <ProgressBar label="Incomplete Uniform" percentage={75} />
            <ProgressBar label="Grooming violation" percentage={50} />
            <ProgressBar label="Facility Misuse" percentage={25} />
            <ProgressBar label="Escalated" percentage={25} />
        </div>
    </div>
);

const MostBookedFacility: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold mb-4">Most Booked Facility</h2>
        <div className="space-y-4">
            <ProgressBar label="Main Auditorium" percentage={75} />
            <ProgressBar label="Mini Auditorium" percentage={50} />
            <ProgressBar label="Main Lobby" percentage={25} />
            <ProgressBar label="Farmville" percentage={25} />
        </div>
    </div>
);

const FullyCompliantOrganization: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold mb-4">Fully Compliant Organization</h2>
        <div className="space-y-4">
            <ProgressBar label="F.A.C.E.S" percentage={75} />
            <ProgressBar label="GDG" percentage={50} />
            <ProgressBar label="SITES" percentage={25} />
            <ProgressBar label="RS" percentage={25} />
        </div>
    </div>
);

export default OsadDigitalHub;
