"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './components.styles';

const CallToAction: React.FC = () => {
    const router = useRouter();

    const handleGetStartedClick = () => {
        router.push('/auth/login');
    };

    return (
        <section>
            <h2>Get Started Today</h2>
            <Button onClick={handleGetStartedClick}>Sign Up Now</Button>
        </section>
    );
};

export default CallToAction;
