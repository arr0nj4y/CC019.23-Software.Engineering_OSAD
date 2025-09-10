import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect } from 'react';
import { motion } from 'framer-motion';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// --- Type Definition ---
type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    user_level: string;
    user_school_id: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } =
        useForm<Required<RegisterForm>>({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            user_level: 'student',
            user_school_id: '',
        });

    // Reset password fields on unmount
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    // Auto-extract School ID from email
    useEffect(() => {
        const match = data.email.match(/_(\d+)@/);
        const schoolId = match ? match[1] : '';
        setData('user_school_id', schoolId);
    }, [data.email]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            <motion.div
                className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* Left Column */}
                    <motion.div
                        className="hidden w-1/2 flex-col items-center justify-center bg-white p-10 md:flex"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <motion.img
                            src="/uic_image.png"
                            alt="University of the Immaculate Conception Logo"
                            className="h-48 w-48 object-contain"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                        <motion.h1
                            className="mt-8 text-center text-xl font-bold text-gray-800"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            OSAD Digital Hub
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-center text-sm text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Empowering Student Organizations Through Digital Compliance
                        </motion.p>
                    </motion.div>

                    {/* Right Column */}
                    <div className="w-full p-8 md:w-1/2 md:p-16">
                        <motion.h2
                            className="text-3xl font-bold text-gray-900"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Create an account
                        </motion.h2>
                        <motion.p
                            className="mt-2 text-gray-600"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Fill in your details below to create a new account.
                        </motion.p>

                        <motion.form
                            className="mt-8 space-y-6"
                            onSubmit={submit}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {/* Full Name */}
                            <div>
                                <Label htmlFor="name" className="font-semibold text-gray-700">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    autoComplete="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="e.g., Juan Dela Cruz"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            {/* Email */}
                            <div>
                                <Label htmlFor="email" className="font-semibold text-gray-700">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="e.g., ajamora_230000001865@uic.edu.ph"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* School ID (auto-extracted, readonly) */}
                            <div>
                                <Label htmlFor="user_school_id" className="font-semibold text-gray-700">
                                    School ID
                                </Label>
                                <Input
                                    id="user_school_id"
                                    type="text"
                                    value={data.user_school_id}
                                    readOnly
                                    placeholder="Automatically extracted from email"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-gray-100 text-gray-900 cursor-not-allowed"
                                />
                                <InputError message={errors.user_school_id} className="mt-2" />
                            </div>

                            {/* Password */}
                            <div>
                                <Label htmlFor="password" className="font-semibold text-gray-700">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <Label htmlFor="password_confirmation" className="font-semibold text-gray-700">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    placeholder="Confirm your password"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 flex w-full items-center justify-center rounded-md bg-pink-600 py-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                REGISTER
                            </Button>

                            <div className="mt-6 text-center text-sm text-gray-500">
                                Already have an account?{' '}
                                <TextLink href={route('login')} className="text-pink-600 hover:underline">
                                    Log in
                                </TextLink>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
