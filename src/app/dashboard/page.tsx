"use client";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
    Container,
    Title,
    Button,
    DashboardContainer,
    InputLabel,
    NumberInput,
    CapitalCard,
    ResultCard,
    ProfitLossIndicator,
    InputGroup
} from '../styled';

const Dashboard: React.FC = () => {
    const [initialCapital, setInitialCapital] = useState<number>(0);
    const [stake, setStake] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [breakEven, setBreakEven] = useState<number>(0);
    const [currentCapital, setCurrentCapital] = useState<number>(0);
    const [results, setResults] = useState<{ result: number; profitLoss: number }[]>([]);

    useEffect(() => {
        // Initialize current capital when initialCapital changes
        setCurrentCapital(initialCapital);
    }, [initialCapital]);

    const handleAddResult = () => {
        const isProfit = result > breakEven;
        const profitLoss = isProfit ? stake : -stake;

        // Update currentCapital based on profit or loss
        setCurrentCapital(prevCapital => {
            const newCapital = prevCapital + profitLoss;

            // Show toast if current capital is zero or less
            if (newCapital <= 0) {
                toast.error('You have no more capital to stake!');
            }

            return newCapital;
        });

        // Add the result to the list of results
        setResults([{ result, profitLoss }, ...results].slice(0, 5)); // Keep only the 5 most recent results
    };

    return (
        <Container>
            <Title>Dashboard</Title>
            <DashboardContainer>
                <div>
                    <InputGroup>
                        <InputLabel>Initial Capital:</InputLabel>
                        <NumberInput
                            type="number"
                            value={initialCapital}
                            onChange={(e) => setInitialCapital(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLabel>Stake per Round:</InputLabel>
                        <NumberInput
                            type="number"
                            value={stake}
                            onChange={(e) => setStake(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLabel>Result:</InputLabel>
                        <NumberInput
                            type="number"
                            value={result}
                            onChange={(e) => setResult(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLabel>Break-Even:</InputLabel>
                        <NumberInput
                            type="number"
                            value={breakEven}
                            onChange={(e) => setBreakEven(Number(e.target.value))}
                        />
                    </InputGroup>
                    <Button onClick={handleAddResult}>Add Result</Button>
                </div>
                <div>
                    <CapitalCard>
                        <h3>Current Capital: ${currentCapital.toFixed(2)}</h3>
                        <h3>Initial Capital: ${initialCapital.toFixed(2)}</h3>
                    </CapitalCard>
                </div>
                <div>
                    {results.map((res, index) => (
                        <ResultCard key={index}>
                            <h4>Result: ${res.result.toFixed(2)}</h4>
                            <p>
                                Profit/Loss:
                                <ProfitLossIndicator profit={res.profitLoss >= 0}>
                                    {res.profitLoss >= 0 ? '+' : '-'}${Math.abs(res.profitLoss).toFixed(2)}
                                </ProfitLossIndicator>
                            </p>
                        </ResultCard>
                    ))}
                </div>
            </DashboardContainer>
        </Container>
    );
};

export default Dashboard;
