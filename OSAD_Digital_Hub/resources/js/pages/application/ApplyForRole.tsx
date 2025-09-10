import React, { FormEvent } from 'react';
// @ts-ignore
import AuthenticatedLayout from '../../layouts/authenticatedlayout';
// @ts-ignore
import { Head, useForm, usePage } from 'https://esm.sh/@inertiajs/react@1.0.11';
// @ts-ignore
import route from 'https://esm.sh/ziggy-js@1.8.1';
import { type User } from '@/types';

// A simple Organization type for this page
interface Organization {
    id: number;
    name: string;
}

// --- Icons ---
const LockOpenIcon = ({ className = 'h-6 w-6' }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75M3.75 21.75h16.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5z" /></svg> );
const PaperAirplaneIcon = ({ className = 'h-5 w-5' }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}><path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086L2.279 16.76a.75.75 0 00.95.826l16-5.333a.75.75 0 000-1.418l-16-5.333z" /></svg> );
const CheckCircleIcon = ({ className = 'h-6 w-6' }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );

interface ApplyForOfficerRoleProps {
    auth: { user: User };
    organizations: Organization[];
}

export default function ApplyForOfficerRole({ auth, organizations }: ApplyForOfficerRoleProps) {
    const { flash } = usePage().props as any;

    const availableRoles = ['Officer', 'President', 'Treasurer', 'Secretary'];

    const { data, setData, post, processing, wasSuccessful, errors } = useForm({
        organization_id: organizations[0]?.id.toString() || '',
        requested_role: availableRoles[0],
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('applications.store'));
    };
    
    if (wasSuccessful && flash.success) {
        return (
            <AuthenticatedLayout user={auth.user}>
                <Head title="Application Submitted" />
                <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg">
                    <CheckCircleIcon className="w-20 h-20 text-green-500" />
                    <h1 className="mt-4 text-3xl font-bold text-gray-800">Application Sent!</h1>
                    <p className="mt-2 text-lg text-gray-600">{flash.success}</p>
                    <p className="mt-2 text-gray-500">Your request has been sent for approval. You will be notified once it has been reviewed.</p>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Apply for Officer Role" />
            <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 rounded-full bg-indigo-100 p-3"> <LockOpenIcon className="h-7 w-7 text-indigo-600" /> </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Apply for an Officer Role</h1>
                        <p className="mt-1 text-gray-600">Request elevated access to manage an organization. Approval from an admin is required.</p>
                    </div>
                </div>

                {flash.error && (
                    <div className="mt-6 rounded-md bg-red-50 p-4">
                        <p className="text-sm font-medium text-red-800">{flash.error}</p>
                    </div>
                )}
                
                <div className="mt-6 rounded-lg border-2 border-dashed border-yellow-300 bg-yellow-50 p-4">
                    <p className="text-sm text-yellow-800"><span className="font-bold">Permission Request:</span> If approved, you will gain access to the <span className="font-semibold">"Organization Management"</span> module for your selected club.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="organization_id" className="block text-sm font-medium leading-6 text-gray-900">Select Organization</label>
                        <select id="organization_id" name="organization_id" value={data.organization_id} onChange={(e) => setData('organization_id', e.target.value)} className="mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600">
                            {organizations.map(org => (<option key={org.id} value={org.id}>{org.name}</option>))}
                        </select>
                        {errors.organization_id && <p className="mt-1 text-sm text-red-600">{errors.organization_id}</p>}
                    </div>
                    <div>
                        <label htmlFor="requested_role" className="block text-sm font-medium leading-6 text-gray-900">Desired Role</label>
                        <select id="requested_role" name="requested_role" value={data.requested_role} onChange={(e) => setData('requested_role', e.target.value)} className="mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600">
                            {availableRoles.map(role => (<option key={role} value={role}>{role}</option>))}
                        </select>
                        {errors.requested_role && <p className="mt-1 text-sm text-red-600">{errors.requested_role}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message (Optional)</label>
                        <textarea id="message" name="message" rows={4} value={data.message} onChange={(e) => setData('message', e.target.value)} placeholder="Briefly explain why you are a good fit for this role." className="mt-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"></textarea>
                    </div>
                    <div className="flex justify-end border-t pt-6">
                        <button type="submit" disabled={processing} className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50">
                            {processing ? 'Submitting...' : 'Submit Application'}
                            {!processing && <PaperAirplaneIcon />}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

