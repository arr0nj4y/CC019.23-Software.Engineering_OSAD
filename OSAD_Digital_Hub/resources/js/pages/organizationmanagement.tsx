import AuthenticatedLayout from '@/layouts/authenticatedlayout'; // FIX: Lowercase path
import { Head } from '@inertiajs/react';
import { type User } from '@/types';
import React from 'react';
import OrgStatCards from '@/components/orgstatcards'; // FIX: Lowercase path
import QuickActions from '@/components/quickactions'; // FIX: Lowercase path
import UpcomingDeadlines from '@/components/upcomingdeadlines'; // FIX: Lowercase path

// --- Main Organization Management Page Component ---

interface OrganizationManagementProps {
    auth: {
        user: User;
    };
}

export default function OrganizationManagement({ auth }: OrganizationManagementProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Organization Management" />

            <div className="flex flex-col gap-8">
                {/* Stat Cards Section */}
                <OrgStatCards />

                {/* Quick Actions Section */}
                <QuickActions />

                {/* Upcoming Deadlines Section */}
                <UpcomingDeadlines />
            </div>
        </AuthenticatedLayout>
    );
}
