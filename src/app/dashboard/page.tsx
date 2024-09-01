"use client";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaDollarSign, FaChartLine, FaChartPie, FaBullseye, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import ResetIcon from '../../../public/reset.svg';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import withAuth from '../components/withAuth';
import { Title } from '../styled';
import { Container, Button, DashboardContainer, CapitalCard, ColumnContainer, Section, CardTitle, CardValue, ProfitLossIndicator, BoldValue, InputGroupContainer, InputGroupSection, InputGroup, InputLabel, NumberInput, HelpTextContainer, HelpIcon, HelpText, ResultCard, NewResultItem, ResultItem } from './dashboard.styles';

const Dashboard: React.FC = () => {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/login');
        }
    }, [isAuthenticated, router]);

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
        setCurrentCapital(initialCapital);
    }, [initialCapital]);

    // Calculate Stop Loss Amount when Stop Loss Percent changes
    useEffect(() => {
        if (initialCapital > 0 && stopLossPercent > 0) {
            setStopLossAmount((stopLossPercent / 100) * initialCapital);
        }
    }, [stopLossPercent, initialCapital]);

    // Calculate Stop Loss Percent when Stop Loss Amount changes
    useEffect(() => {
        if (initialCapital > 0 && stopLossAmount > 0) {
            setStopLossPercent((stopLossAmount / initialCapital) * 100);
        }
    }, [stopLossAmount, initialCapital]);

    // Calculate Target Profit Amount when Target Profit Percent changes
    useEffect(() => {
        if (initialCapital > 0 && targetProfitPercent > 0) {
            setTargetProfitAmount((targetProfitPercent / 100) * initialCapital);
        }
    }, [targetProfitPercent, initialCapital]);

    // Calculate Target Profit Percent when Target Profit Amount changes
    useEffect(() => {
        if (initialCapital > 0 && targetProfitAmount > 0) {
            setTargetProfitPercent((targetProfitAmount / initialCapital) * 100);
        }
    }, [targetProfitAmount, initialCapital]);


    const calculatePercentageChange = (): number => {
        if (initialCapital === 0) return 0; // Avoid division by zero
        return ((currentCapital - initialCapital) / initialCapital) * 100;
    };

    const handleAddResult = async () => {
        const isProfit = result > breakEven;
        const profitLoss = isProfit ? stake : -stake;

        setCurrentCapital((prevCapital) => {
            const newCapital = prevCapital + profitLoss;

            if (newCapital <= 0) {
                toast.error('You have no more capital to stake!');
            }

            if (targetProfitPercent > 0 && calculatePercentageChange() >= targetProfitPercent) {
                toast.success(`Target profit percentage (${targetProfitPercent}%) reached!`);
            }

            if (stopLossPercent > 0 && calculatePercentageChange() <= -stopLossPercent) {
                toast.error(`Stop loss percentage (${stopLossPercent}%) reached!`);
            }

            if (targetProfitAmount > 0 && newCapital >= targetProfitAmount) {
                toast.success(`Target profit amount ($${targetProfitAmount.toFixed(2)}) reached!`);
            }

            if (stopLossAmount > 0 && newCapital <= stopLossAmount) {
                toast.error(`Stop loss amount ($${stopLossAmount.toFixed(2)}) reached!`);
            }

            return newCapital;
        });

        const resultData = {
            user: user?._id,
            initialCapital,
            stake,
            result,
            breakEven,
            currentCapital: currentCapital + profitLoss,
            profitLoss,
            targetProfitPercent,
            targetProfitAmount,
            stopLossPercent,
            stopLossAmount,
        };
        console.log({ resultData });

        try {
            const response = await fetch('/api/results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resultData),
            });

            if (!response.ok) {
                throw new Error('Failed to save result');
            }

            const data = await response.json();
            toast.success(data.message);
            setResults([{ result, profitLoss }, ...results].slice(0, 50)); // Keep only the 50 most recent results
        } catch (error) {
            toast.error('Error saving result');
        }
    };

    // Reset all state values to their initial defaults
    const handleReset = () => {
        setInitialCapital(0);
        setStake(0);
        setResult(0);
        setBreakEven(0);
        setCurrentCapital(0);
        setTargetProfitPercent(0);
        setTargetProfitAmount(0);
        setStopLossPercent(0);
        setStopLossAmount(0);
        setResults([]);
    };

    const percentageChange = calculatePercentageChange();
    const isCapitalProfit = currentCapital >= initialCapital;

    return (
        <Container>
            {isAuthenticated && user && (
                <div style={{ marginBottom: '20px' }}>
                    <h2>Welcome, {user.name}!</h2>
                </div>
            )}
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
                    <InputGroupSection>
                        <InputGroup>
                            <InputLabel>Initial Capital:</InputLabel>
                            <NumberInput
                                type="number"
                                value={initialCapital}
                                onChange={(e) => setInitialCapital(Number(e.target.value))}
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
                    </InputGroupSection>
                    <InputGroupSection>
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
                        <HelpTextContainer>
                            <HelpIcon>
                                <FaInfoCircle />
                            </HelpIcon>
                            <HelpText>
                                This field is frequently updated with new results.
                            </HelpText>
                        </HelpTextContainer>
                    </InputGroupSection>
                </InputGroupContainer>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <Button onClick={handleAddResult}>Add Result</Button>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
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
                                        {res.profitLoss >= 0 ? ' +' : ' -'}${Math.abs(res.profitLoss).toFixed(2)}
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

export default withAuth(Dashboard);
