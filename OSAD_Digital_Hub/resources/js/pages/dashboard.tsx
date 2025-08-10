import AuthenticatedLayout from '@/layouts/authenticatedlayout';
import { Head } from '@inertiajs/react';
import { type User } from '@/types';
import SummaryCards from '@/components/summarycards';
import FacilityBookings from '@/components/facilitybookings';
import AnalyticsCharts from '@/components/analyticscharts';
import DashboardCalendar from '@/components/dashboardcalendar'; // Import the new component

// Define the props for the page
interface DashboardProps {
    auth: {
        user: User;
    };
}

export default function Dashboard({ auth }: DashboardProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* Main content area for the dashboard */}
            <div className="flex flex-col gap-6">
                {/* 1. Summary cards at the top */}
                <SummaryCards />

                {/* 2. Two-column layout for the main content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left column (takes up 2/3 of the space on large screens) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <FacilityBookings />
                        <DashboardCalendar />
                    </div>

                    {/* Right column (takes up 1/3 of the space on large screens) */}
                    <div className="lg:col-span-1">
                        <AnalyticsCharts />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
