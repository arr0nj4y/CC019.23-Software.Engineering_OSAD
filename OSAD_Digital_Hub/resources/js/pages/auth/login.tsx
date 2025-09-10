import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />
            <motion.div
                className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-xl"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    {/* Left Column: Logo and Title */}
                    <motion.div
                        className="hidden w-1/2 flex-col items-center justify-center bg-white p-10 md:flex"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        <motion.img
                            src="/uic_image.png"
                            alt="University of the Immaculate Conception Logo"
                            className="h-48 w-48 object-contain"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                        <motion.h1
                            className="mt-8 text-center text-xl font-bold text-gray-800"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            OSAD Digital Hub
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-center text-sm text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Empowering Student Organizations Through Digital Compliance
                        </motion.p>
                    </motion.div>

                    {/* Right Column: Login Form */}
                    <motion.div
                        className="w-full p-8 md:w-1/2 md:p-16"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-gray-900"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            Welcome Back
                        </motion.h2>
                        <motion.p
                            className="mt-2 text-gray-600"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Log in to manage activities, submissions, and compliance.
                        </motion.p>

                        {status && (
                            <motion.div
                                className="mt-4 text-center text-sm font-medium text-green-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {status}
                            </motion.div>
                        )}

                        <form className="mt-8 space-y-6" onSubmit={submit}>
                            {/* Email Input Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Label htmlFor="email" className="font-semibold text-gray-700">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoFocus
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="e.g., yourname@uic.edu.ph"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 placeholder-gray-400
                                               text-gray-900 transition-all duration-300 ease-in-out
                                               focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </motion.div>

                            {/* Password Input Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="font-semibold text-gray-700">
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={route('password.request')}
                                            className="text-sm text-pink-600 hover:underline"
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 placeholder-gray-400
                                               text-gray-900 transition-all duration-300 ease-in-out
                                               focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </motion.div>

                            {/* Remember me checkbox and login button container */}
                            <motion.div
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            >
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onClick={() => setData('remember', !data.remember)}
                                        className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                                    />
                                    <Label htmlFor="remember" className="text-sm font-medium text-gray-700">
                                        Remember me
                                    </Label>
                                </div>

                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md bg-pink-600 py-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                        LOGIN
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* "Don't have an account?" link */}
                            <motion.div
                                className="mt-6 text-center text-sm text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                Don't have an account?{' '}
                                <TextLink href={route('register')} className="text-pink-600 hover:underline">
                                    Register
                                </TextLink>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
