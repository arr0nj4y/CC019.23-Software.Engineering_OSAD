import AuthenticatedLayout from '@/layouts/authenticatedlayout';
import { Head } from '@inertiajs/react';
import { type User } from '@/types';
import React from 'react';
import ActivityReportsSummary from '@/components/activityreportssummary';
import ActivityReportsTable from '@/components/activityreportstable';

// --- Main Activity Reports Page Component ---

interface ActivityReportsProps {
    auth: {
        user: User;
    };
}

export default function ActivityReports({ auth }: ActivityReportsProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Activity Reports" />

            <div className="flex flex-col gap-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Activity Reports</h1>
                    <p className="text-gray-500">Manage your organization's Activity Reports</p>
                </div>

                {/* Summary Cards */}
                <ActivityReportsSummary />

                {/* Reports Table Section */}
                <ActivityReportsTable />
            </div>
        </AuthenticatedLayout>
    );
}
