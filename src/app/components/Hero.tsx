import React from 'react';
import { HeroSection, HeroText, HeroImage, Button, Title } from '../styled';

const Hero: React.FC = () => {
    return (
        <HeroSection>
            <HeroText>
                <Title>Welcome to Moneymakers</Title>
                <p>
                    Track your trades, profits, losses, and targets all in one place. Whether you’re involved in official trading or unofficial gambling, Moneymakers is here to help you stay on top of your game.
                </p>
                <Button>Get Started</Button>
            </HeroText>
            <HeroImage>
                <img src="/hero.jpg" alt="Moneymakers Hero" />
            </HeroImage>
        </HeroSection>
    );
};

export default Hero;
