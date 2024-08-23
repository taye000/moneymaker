"use client";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CapitalCard, Section, CardTitle, CardValue, ProfitLossIndicator, Button, Container, DashboardContainer, InputGroup, InputGroupContainer, InputLabel, NewResultItem, NumberInput, ResultCard, ResultItem, Title, ColumnContainer, BoldValue } from '../styled';
import { FaDollarSign, FaChartLine, FaChartPie, FaBullseye, FaExclamationCircle } from 'react-icons/fa';

const Dashboard: React.FC = () => {
    const [initialCapital, setInitialCapital] = useState<number>(0);
    const [stake, setStake] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [breakEven, setBreakEven] = useState<number>(0);
    const [currentCapital, setCurrentCapital] = useState<number>(0);
    const [targetProfitPercent, setTargetProfitPercent] = useState<number>(0);
    const [targetProfitAmount, setTargetProfitAmount] = useState<number>(0);
    const [stopLossPercent, setStopLossPercent] = useState<number>(0);
    const [stopLossAmount, setStopLossAmount] = useState<number>(0);
    const [results, setResults] = useState<{ result: number; profitLoss: number }[]>([]);

    useEffect(() => {
        // Initialize current capital when initialCapital changes
        setCurrentCapital(initialCapital);
    }, [initialCapital]);

    const calculatePercentageChange = (): number => {
        if (initialCapital === 0) return 0; // Avoid division by zero
        return ((currentCapital - initialCapital) / initialCapital) * 100;
    };

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

            // Check for target profit percent
            if (targetProfitPercent > 0 && calculatePercentageChange() >= targetProfitPercent) {
                toast.success(`Target profit percentage (${targetProfitPercent}%) reached!`);
            }

            // Check for stop loss percent
            if (stopLossPercent > 0 && calculatePercentageChange() <= -stopLossPercent) {
                toast.error(`Stop loss percentage (${stopLossPercent}%) reached!`);
            }

            // Check for target profit amount
            if (targetProfitAmount > 0 && newCapital >= targetProfitAmount) {
                toast.success(`Target profit amount ($${targetProfitAmount.toFixed(2)}) reached!`);
            }

            // Check for stop loss amount
            if (stopLossAmount > 0 && newCapital <= stopLossAmount) {
                toast.error(`Stop loss amount ($${stopLossAmount.toFixed(2)}) reached!`);
            }

            return newCapital;
        });

        // Add the result to the list of results
        setResults([{ result, profitLoss }, ...results].slice(0, 50)); // Keep only the 50 most recent results
    };

    const percentageChange = calculatePercentageChange();

    // Determine if the current capital is a profit or loss compared to the initial capital
    const isCapitalProfit = currentCapital >= initialCapital;

    return (
        <Container>
            <Title>Dashboard</Title>
            <DashboardContainer>
                <CapitalCard>
                    <ColumnContainer>
                        <Section>
                            <CardTitle>Capital Status</CardTitle>
                            <CardValue>
                                <FaDollarSign /> Current Capital:
                                <ProfitLossIndicator $profit={isCapitalProfit}>
                                    ${currentCapital.toFixed(2)}
                                </ProfitLossIndicator>
                            </CardValue>
                            <CardValue>
                                <FaDollarSign /> Initial Capital: <BoldValue>${initialCapital.toFixed(2)}</BoldValue>
                            </CardValue>
                            <CardValue>
                                <FaChartLine /> Profit/Loss % :
                                <ProfitLossIndicator $profit={percentageChange >= 0}>
                                    {percentageChange >= 0 ? ' +' : ' -'}{Math.abs(percentageChange).toFixed(2)}%
                                </ProfitLossIndicator>
                            </CardValue>
                        </Section>
                        {(stake > 0 || breakEven > 0) && (
                            <Section>
                                <CardTitle>Investment Details</CardTitle>
                                {stake > 0 && (
                                    <CardValue>
                                        <FaChartPie /> Stake per Round: <BoldValue>${stake.toFixed(2)}</BoldValue>
                                    </CardValue>
                                )}
                                {breakEven > 0 && (
                                    <CardValue>
                                        <FaBullseye /> Break-Even: <BoldValue>${breakEven.toFixed(2)}</BoldValue>
                                    </CardValue>
                                )}
                            </Section>
                        )}
                        {(
                            targetProfitPercent > 0 ||
                            targetProfitAmount > 0 ||
                            stopLossPercent > 0 ||
                            stopLossAmount > 0
                        ) && (
                                <Section>
                                    <CardTitle>Targets & Limits</CardTitle>
                                    {targetProfitPercent > 0 && (
                                        <CardValue>
                                            <FaChartLine /> Target Profit %: <BoldValue>{targetProfitPercent}%</BoldValue>
                                        </CardValue>
                                    )}
                                    {targetProfitAmount > 0 && (
                                        <CardValue>
                                            <FaBullseye /> Target Profit Amount: <BoldValue>${targetProfitAmount.toFixed(2)}</BoldValue>
                                        </CardValue>
                                    )}
                                    {stopLossPercent > 0 && (
                                        <CardValue>
                                            <FaExclamationCircle /> Stop Loss %: <BoldValue>{stopLossPercent}%</BoldValue>
                                            </CardValue>
                                    )}
                                    {stopLossAmount > 0 && (
                                        <CardValue>
                                            <FaExclamationCircle /> Stop Loss Amount: <BoldValue>${stopLossAmount.toFixed(2)}</BoldValue>
                                            </CardValue>
                                    )}
                                </Section>
                            )}
                    </ColumnContainer>
                </CapitalCard>
                <InputGroupContainer>
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
                        <InputLabel>Target Profit %:</InputLabel>
                        <NumberInput
                            type="number"
                            value={targetProfitPercent}
                            onChange={(e) => setTargetProfitPercent(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLabel>Target Profit Amount:</InputLabel>
                        <NumberInput
                            type="number"
                            value={targetProfitAmount}
                            onChange={(e) => setTargetProfitAmount(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLabel>Stop Loss %:</InputLabel>
                        <NumberInput
                            type="number"
                            value={stopLossPercent}
                            onChange={(e) => setStopLossPercent(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLabel>Stop Loss Amount:</InputLabel>
                        <NumberInput
                            type="number"
                            value={stopLossAmount}
                            onChange={(e) => setStopLossAmount(Number(e.target.value))}
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
                    <InputGroup>
                        <InputLabel>Result:</InputLabel>
                        <NumberInput
                            type="number"
                            value={result}
                            onChange={(e) => setResult(Number(e.target.value))}
                        />
                    </InputGroup>
                </InputGroupContainer>
                <Button onClick={handleAddResult}>Add Result</Button>

                <ResultCard>
                    {results.map((res, index) => (
                        index === 0 ? (
                            <NewResultItem key={index}>
                                <h4>Result: {res.result.toFixed(2)}</h4>
                                <p>
                                    <ProfitLossIndicator $profit={res.profitLoss >= 0}>
                                        {res.profitLoss >= 0 ? ' +' : ' -'}${Math.abs(res.profitLoss).toFixed(2)}
                                    </ProfitLossIndicator>
                                </p>
                            </NewResultItem>
                        ) : (
                            <ResultItem key={index}>
                                <h4>Result: {res.result.toFixed(2)}</h4>
                                <p>
                                    <ProfitLossIndicator $profit={res.profitLoss >= 0}>
                                        {res.profitLoss >= 0 ? '+' : '-'}${Math.abs(res.profitLoss).toFixed(2)}
                                    </ProfitLossIndicator>
                                </p>
                            </ResultItem>
                        )
                    ))}
                </ResultCard>
            </DashboardContainer>
        </Container>
    );
};

export default Dashboard;
