import React from 'react';
import { Container, Content, Title } from '../styled';

const FAQ: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>Frequently Asked Questions</Title>
                <h3>What is Moneymakers?</h3>
                <p>
                    Moneymakers is a comprehensive platform for tracking your trades, profits, losses, and targets. It caters to both official trading and unofficial gambling.
                </p>

                <h3>How do I get started?</h3>
                <p>
                    Click the "Get Started" button on the homepage to sign up and start using Moneymakers. Follow the onboarding process to set up your account.
                </p>

                <h3>Is my data secure?</h3>
                <p>
                    Yes, we take data security very seriously and use the latest technologies to ensure your information is protected.
                </p>
            </Content>
        </Container>
    );
};

export default FAQ;
