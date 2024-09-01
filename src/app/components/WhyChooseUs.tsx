import React from 'react';
import { Card, CardContainer } from './components.styles';

const WhyChooseUs: React.FC = () => {
    return (
        <section>
            <h2>Why Choose Us?</h2>
            <CardContainer>
                <Card>
                    <h3>Comprehensive Tracking</h3>
                    <p>All your data in one place, from trading to betting.</p>
                </Card>
                <Card>
                    <h3>Real-Time Updates</h3>
                    <p>Instant access to the latest information about your investments and bets.</p>
                </Card>
                <Card>
                    <h3>Easy to Use</h3>
                    <p>Our intuitive interface ensures a seamless experience.</p>
                </Card>
            </CardContainer>
        </section>
    );
};

export default WhyChooseUs;
