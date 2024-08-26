import React from 'react';
import Image from 'next/image';
import { Container, ContentWrapper, Button, Title } from '../styled';

const Hero: React.FC = () => {
    return (
        <Container as="section">
            <ContentWrapper>
                <div style={{ textAlign: 'center' }}>
                    <Title>Welcome to Moneymakers</Title>
                    <p>
                        Track your trades, profits, losses, and targets all in one place. Whether you’re involved in official trading or unofficial gambling, Moneymakers is here to help you stay on top of your game.
                    </p>
                    <Button>Get Started</Button>
                </div>
                <div style={{ marginTop: '2rem' }}> {/* Optional inline style for spacing */}
                    <Image
                        src="/hero.jpg"
                        alt="Moneymakers Hero"
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                        layout="responsive" // Adjust layout as needed
                    />
                </div>
            </ContentWrapper>
        </Container>
    );
};

export default Hero;
