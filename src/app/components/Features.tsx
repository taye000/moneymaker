import React from 'react';
import { CardContainer, LargeCard } from '../styled';

const Features: React.FC = () => {
    return (
        <CardContainer>
            <LargeCard>
                <h3>Track Your Trades</h3>
                <p>Keep a detailed record of all your trades, so you can analyze your performance and make informed decisions.</p>
            </LargeCard>
            <LargeCard>
                <h3>Monitor Your Profits & Losses</h3>
                <p>Stay updated on your financial gains and losses with real-time tracking and historical data.</p>
            </LargeCard>
            <LargeCard>
                <h3>Set & Achieve Targets</h3>
                <p>Define your goals and monitor your progress towards achieving them, keeping your objectives in sight.</p>
            </LargeCard>
        </CardContainer>
    );
};

export default Features;
