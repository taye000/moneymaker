"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, CTAContainer, CTAHeadline, CTAText } from './components.styles';

const CallToAction: React.FC = () => {
    const router = useRouter();

    const handleGetStartedClick = () => {
        router.push('/auth/login');
    };

    return (
        <CTAContainer>
            <CTAHeadline>Transform Your Trading Experience</CTAHeadline>
            <CTAText>
                Join Moneymakers today and start tracking your trades, profits, and losses with ease. Take control of your financial future.
            </CTAText>
            <Button onClick={handleGetStartedClick}>Sign Up Now</Button>
        </CTAContainer>
    );
};

export default CallToAction;
