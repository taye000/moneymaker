import React from 'react';
import { HeroSection, HeroText, HeroImage, Button, Title } from '../styled';
import Image from 'next/image';

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
                <Image
                    src="/hero.jpg"
                    alt="Moneymakers Hero"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                    layout="responsive" // Adjust layout as needed
                />
            </HeroImage>
        </HeroSection>
    );
};

export default Hero;
