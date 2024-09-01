"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../components.styles';
import { Container, ContentWrapper, Title, Description, ImageWrapper } from './Hero.styles';

const Hero: React.FC = () => {
    const router = useRouter();

    const handleGetStartedClick = () => {
        router.push('/auth/login');
    };

    return (
        <Container as="section">
            <ContentWrapper>
                <div>
                    <Title>Welcome to Moneymakers</Title>
                    <Description>
                        Track your trades, profits, losses, and targets all in one place. Whether you’re involved in official trading or unofficial gambling, Moneymakers is here to help you stay on top of your game.
                    </Description>
                    <Button onClick={handleGetStartedClick}>Get Started</Button>
                </div>
                <ImageWrapper>
                    <Image
                        src="/hero.jpg"
                        alt="Moneymakers Hero"
                        width={500}
                        height={300}
                        layout="responsive"
                    />
                </ImageWrapper>
            </ContentWrapper>
        </Container>
    );
};

export default Hero;
