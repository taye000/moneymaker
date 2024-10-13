"use client";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaDollarSign, FaChartLine, FaChartPie, FaBullseye, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import withAuth from '../components/withAuth';
import { Title } from '../styled';
import { Container, Button, DashboardContainer, CapitalCard, ColumnContainer, Section, CardTitle, CardValue, ProfitLossIndicator, BoldValue, InputGroupContainer, InputGroupSection, InputGroup, InputLabel, NumberInput, HelpTextContainer, HelpIcon, HelpText, ResultCard, NewResultItem, ResultItem, Checkbox, DeleteButton, ResultItemContent, ResultItemActions, TrashIcon, NoResultsMessage, ShortcutContainer, ShortcutCard, StreakCard, StreakContainer, ResultText, SectionTitle } from './dashboard.styles';

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
    const [results, setResults] = useState<{ result: number; breakEven: number; profitLoss: number; id: string }[]>([]);
    const [selectedResults, setSelectedResults] = useState<Set<string>>(new Set());
    const [finalStraw, setFinalStraw] = useState<number>(0);
    const [finalStrawHistory, setFinalStrawHistory] = useState<{ count: number; type: "W" | "L" }[]>([]);
    const [streakCount, setStreakCount] = useState<number>(0);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch('/api/results');
                if (!response.ok) throw new Error('Failed to fetch results');
                const data = await response.json();
                setResults(data.map((res: any) => ({
                    id: res._id,
                    result: res.result,
                    profitLoss: res.profitLoss,
                    breakEven: res.breakEven
                })));
                calculateStreakData(data);
            } catch (error) {
                toast.error('Error fetching results');
            }
        };

        fetchResults();
    }, []);

    const calculateStreakData = (data: any[]) => {
        let streak = 0;
        let lastFinalStraw = 0;
        const finalStraws: { count: number; type: "W" | "L" }[] = [];
        let currentStreakType: "win" | "lose" | null = null;

        data.forEach((res) => {
            const isWin = res.result > res.breakEven;

            if (isWin) {
                if (currentStreakType === "win" || currentStreakType === null) {
                    streak += 1;
                    currentStreakType = "win";
                } else {
                    // If it switches from lose to win, store the lose streak
                    if (streak > 0) {
                        finalStraws.push({ count: streak, type: "L" });
                        lastFinalStraw = streak;
                    }
                    streak = 1; // Start new win streak
                    currentStreakType = "win";
                }
            } else {
                if (currentStreakType === "lose" || currentStreakType === null) {
                    streak += 1;
                    currentStreakType = "lose";
                } else {
                    // If it switches from win to lose, store the win streak
                    if (streak > 0) {
                        finalStraws.push({ count: streak, type: "W" });
                        lastFinalStraw = streak;
                    }
                    streak = 1; // Start new lose streak
                    currentStreakType = "lose";
                }
            }
        });

        // Push the last streak if it didn't reset after the loop
        if (streak > 0) {
            finalStraws.push({ count: streak, type: currentStreakType === "win" ? "W" : "L" });
            lastFinalStraw = streak;
        }

        // Update streak count and final straw history
        setStreakCount(streak);
        setFinalStraw(lastFinalStraw);
        setFinalStrawHistory(finalStraws.slice(0, 10));
    };

    const handleShortcutClick = (type: 'breakEven' | 'stake' | 'result', value: number) => {
        if (type === 'breakEven') setBreakEven(value);
        if (type === 'stake') setStake((prevStake) => prevStake + value);
        if (type === 'result') setResult(value);
    };

    const handleDeleteResult = async (id: string) => {
        try {
            await fetch(`/api/results/${id}`, {
                method: "DELETE",
            });
            setResults(results.filter(result => result.id !== id));
            toast.success('Result deleted successfully');
        } catch (error) {
            console.error("Failed to delete result:", error);
            toast.error('Failed to delete result');
        }
    };

    const handleDeleteSelected = async () => {
        try {
            // Convert selectedResults Set to an array of IDs and join them as a comma-separated string
            const ids = Array.from(selectedResults).join(',');

            // Make the DELETE request with the IDs as query parameters
            const response = await fetch(`/api/results?ids=${ids}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Remove deleted results from the state
                setResults(results.filter(result => !selectedResults.has(result.id)));
                // Clear the selected results
                setSelectedResults(new Set());
                toast.success('Selected results deleted successfully');
            } else {
                // Handle non-OK responses
                console.error("Failed to delete selected results:", await response.json());
                toast.error('Failed to delete selected results');
            }
        } catch (error) {
            // Handle fetch errors
            console.error("Failed to delete selected results:", error);
            toast.error('Failed to delete selected results');
        }
    };


    const handleCheckboxChange = (id: string) => {
        setSelectedResults((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleDeleteAll = async () => {
        try {
            await fetch('/api/results', {
                method: 'DELETE',
            });
            setResults([]);
            toast.success('All results deleted successfully');
        } catch (error) {
            console.error("Failed to delete all results:", error);
            toast.error('Failed to delete all results');
        }
    };

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
        if (breakEven <= 0) {
            toast.error('Please enter Break-Even');
            return;
        }
        if (result <= 0) {
            toast.error('Please enter Result');
            return;
        }

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

            if (profitLoss > 0 && profitLoss >= targetProfitAmount) {
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
            setResults((prevResults) => [{ id: data.id, result, profitLoss, breakEven }, ...prevResults].slice(0, 50));

            // Calculate streak data after adding new result
            const updatedResults = [{ id: data.id, result, profitLoss, breakEven }, ...results];
            calculateStreakData(updatedResults); // Recalculate streaks based on updated results
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
                    </InputGroupSection>
                    <InputGroupSection>
                        <InputGroup>
                            <InputLabel>Break-Even:</InputLabel>
                            <NumberInput
                                type="number"
                                value={breakEven}
                                onChange={(e) => setBreakEven(Number(e.target.value))}
                            />
                            <ShortcutContainer>
                                {user?.shortcuts?.breakEven.map((value: any) => (
                                    <ShortcutCard
                                        key={value}
                                        onClick={() => handleShortcutClick('breakEven', value)}
                                        $isSelected={breakEven === value}
                                    >
                                        {value}
                                    </ShortcutCard>
                                ))}
                            </ShortcutContainer>
                        </InputGroup>
                        <InputGroup>
                            <InputLabel>Stake per Round:</InputLabel>
                            <NumberInput
                                type="number"
                                value={stake}
                                onChange={(e) => setStake(Number(e.target.value))}
                            />
                            <ShortcutContainer>
                                {user?.shortcuts?.stake.map((value: any) => (
                                    <ShortcutCard
                                        key={value}
                                        onClick={() => handleShortcutClick('stake', value)}
                                        $isSelected={stake === value}
                                    >
                                        {value}
                                    </ShortcutCard>
                                ))}
                            </ShortcutContainer>
                        </InputGroup>
                        <InputGroup>
                            <InputLabel>Result:</InputLabel>
                            <NumberInput
                                type="number"
                                value={result}
                                onChange={(e) => setResult(Number(e.target.value))}
                            />
                            {user?.shortcuts?.result?.enabled && (
                                <ShortcutContainer>
                                    <ShortcutCard
                                        onClick={() => handleShortcutClick('result', breakEven + 0.1)}
                                        $isSelected={result === breakEven + 0.1}
                                    >
                                        Win
                                    </ShortcutCard>
                                    <ShortcutCard
                                        onClick={() => handleShortcutClick('result', breakEven - 0.1)}
                                        $isSelected={result === breakEven - 0.1}
                                    >
                                        Lose
                                    </ShortcutCard>
                                </ShortcutContainer>
                            )}
                        </InputGroup>
                        <HelpTextContainer>
                            <HelpIcon>
                                <FaInfoCircle />
                            </HelpIcon>
                            <HelpText>
                                Frequently updated.
                            </HelpText>
                        </HelpTextContainer>
                    </InputGroupSection>
                </InputGroupContainer>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', justifyContent: 'center' }}>
                    <Button onClick={handleAddResult}>Add Result</Button>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                <div>
                    <Title>Results</Title>
                    <div>
                        <Section>
                            <SectionTitle>Streaks</SectionTitle>
                            <StreakContainer>
                                {finalStrawHistory.length > 0 ? (
                                    finalStrawHistory.map((streak, index) => (
                                        <StreakCard key={index} streak={streak.count}>
                                            {streak.count} {streak.type}
                                        </StreakCard>
                                    ))
                                ) : (
                                    <NoResultsMessage>No streaks yet — your adventure is waiting!</NoResultsMessage>
                                )}
                            </StreakContainer>
                        </Section>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                        {results.length > 0 && (
                            <DeleteButton onClick={handleDeleteAll}>
                                Delete All Results
                            </DeleteButton>
                        )}
                        {selectedResults.size > 0 && (
                            <DeleteButton onClick={handleDeleteSelected}>
                                Delete Selected Results
                            </DeleteButton>
                        )}
                    </div>
                    {results.length === 0 ? (
                        <NoResultsMessage>
                            Oh no! It looks like the results took a vacation. Let&apos;s bring them back with some fresh data!
                        </NoResultsMessage>
                    ) : (
                        <ResultCard>
                            {results.map(result => {
                                const isWin = result.result > result.breakEven; // Determine if the result is a win

                                return (
                                    <ResultItem key={result.id}>
                                        <ResultItemContent>
                                            <ResultText isWin={isWin}>Result: {result.result.toFixed(2)}</ResultText>
                                            <p>
                                                <ProfitLossIndicator $profit={result.profitLoss >= 0}>
                                                    {result.profitLoss >= 0 ? ' +' : ' -'}${Math.abs(result.profitLoss).toFixed(2)}
                                                </ProfitLossIndicator>
                                            </p>
                                        </ResultItemContent>
                                        <ResultItemActions>
                                            <Checkbox
                                                checked={selectedResults.has(result.id)}
                                                onChange={() => handleCheckboxChange(result.id)}
                                            />
                                            <TrashIcon onClick={() => handleDeleteResult(result.id)} />
                                        </ResultItemActions>
                                    </ResultItem>
                                );
                            })}
                        </ResultCard>
                    )}
                </div>
            </DashboardContainer>
        </Container>
    );
};

export default withAuth(Dashboard);
