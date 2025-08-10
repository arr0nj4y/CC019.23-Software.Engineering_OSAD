import AuthenticatedLayout from '@/layouts/authenticatedlayout';
import { Head } from '@inertiajs/react';
import { type User } from '@/types';
import React from 'react';
import ConsentSummaryCards from '@/components/consentsummary';
import ConsentRequestsTable from '@/components/consentrequesttable';

// --- Main Consent Management Page Component ---

interface ConsentManagementProps {
    auth: {
        user: User;
    };
}

export default function ConsentManagement({ auth }: ConsentManagementProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Parents' Consent Management" />

            <div className="flex flex-col gap-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Parents' Consent Management</h1>
                    <p className="text-gray-500">Manage your organization's parents' consent</p>
                </div>

                {/* Summary Cards */}
                <ConsentSummaryCards />

                {/* Requests Table */}
                <ConsentRequestsTable />
            </div>
        </AuthenticatedLayout>
    );
}
