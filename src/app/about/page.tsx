import React from 'react';
import { Container, Content, Title } from '../styled';

const AboutUs: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>About Us</Title>
                <p>
                    Welcome to Moneymakers! We are dedicated to providing you with the best tools for tracking your trades, profits, losses, and targets. Our mission is to help you stay on top of your game, whether you're involved in official trading or unofficial gambling.
                </p>
                <p>
                    Our team is committed to innovation and customer satisfaction. We continuously update our platform to meet your needs and ensure a seamless experience.
                </p>
            </Content>
        </Container>
    );
};

export default AboutUs;
