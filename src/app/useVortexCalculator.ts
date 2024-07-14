import { useState } from "react";

interface VortexCalculator {
  initialLoot: number;
  result: number;
  stakePerRound: number;
  threshold: number;
  initialLootHistory: number[];
  resultHistory: number[];
  stakePerRoundHistory: number[];
  thresholdHistory: number[];
  currentLoot: number;
  profitLoss: number;
  setInitialLoot: (value: number) => void;
  setResult: (value: number) => void;
  setStakePerRound: (value: number) => void;
  setThreshold: (value: number) => void;
  handleInitialLootKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleResultKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleStakePerRoundKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  handleThresholdKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const useVortexCalculator = (): VortexCalculator => {
  const [initialLoot, setInitialLoot] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [stakePerRound, setStakePerRound] = useState<number>(0);
  const [threshold, setThreshold] = useState<number>(0);
  const [initialLootHistory, setInitialLootHistory] = useState<number[]>([]);
  const [resultHistory, setResultHistory] = useState<number[]>([]);
  const [stakePerRoundHistory, setStakePerRoundHistory] = useState<number[]>(
    []
  );
  const [thresholdHistory, setThresholdHistory] = useState<number[]>([]);
  const [currentLoot, setCurrentLoot] = useState<number>(0);
  const [profitLoss, setProfitLoss] = useState<number>(0);

  const handleInitialLootKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && initialLoot !== 0) {
      setInitialLootHistory([initialLoot, ...initialLootHistory]);
      setCurrentLoot(initialLoot);
      setInitialLoot(0);
    }
  };

  const handleResultKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && result !== 0) {
      setResultHistory([result, ...resultHistory]);
      const isAboveThreshold = result > threshold;
      const newLoot = isAboveThreshold
        ? currentLoot + stakePerRound
        : currentLoot - stakePerRound;
      setCurrentLoot(newLoot);
      setProfitLoss(isAboveThreshold ? stakePerRound : -stakePerRound);
      setResult(0);
    }
  };

  const handleStakePerRoundKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && stakePerRound !== 0) {
      setStakePerRoundHistory([stakePerRound, ...stakePerRoundHistory]);
      setStakePerRound(0);
    }
  };

  const handleThresholdKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && threshold !== 0) {
      setThresholdHistory([threshold, ...thresholdHistory]);
      setThreshold(0);
    }
  };

  return {
    initialLoot,
    result,
    stakePerRound,
    threshold,
    initialLootHistory,
    resultHistory,
    stakePerRoundHistory,
    thresholdHistory,
    currentLoot,
    profitLoss,
    setInitialLoot,
    setResult,
    setStakePerRound,
    setThreshold,
    handleInitialLootKeyPress,
    handleResultKeyPress,
    handleStakePerRoundKeyPress,
    handleThresholdKeyPress,
  };
};

export default useVortexCalculator;
