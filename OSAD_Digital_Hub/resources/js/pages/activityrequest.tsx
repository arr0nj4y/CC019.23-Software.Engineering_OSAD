import AuthenticatedLayout from '@/layouts/authenticatedlayout';
import { Head } from '@inertiajs/react';
import { type User } from '@/types';
import React from 'react';
import ActivityRequestSummary from '@/components/activityrequestsummary';
import RecentRequests from '@/components/recentrequests';

// --- Main Activity Request Page Component ---

interface ActivityRequestProps {
    auth: {
        user: User;
    };
}

export default function ActivityRequest({ auth }: ActivityRequestProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Activity Request" />

            <div className="flex flex-col gap-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Activity Request</h1>
                    <p className="text-gray-500">Manage your organization's Activity Requests</p>
                </div>

                {/* Summary Cards */}
                <ActivityRequestSummary />

                {/* Recent Requests Table */}
                <RecentRequests />
            </div>
        </AuthenticatedLayout>
    );
}
