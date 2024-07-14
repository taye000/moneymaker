// Home.tsx
"use client";
import * as React from 'react';
import useVortexCalculator from './useVortexCalculator';
import * as Styled from './styled';

const Home = () => {
  const {
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
  } = useVortexCalculator();

  return (
    <main>
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>Vortex</Styled.Title>
        </Styled.Header>
        <Styled.CardContainer>
          <Styled.Card>
            <h3>Initial Loot</h3>
            {initialLootHistory.map((loot, index) => (
              <p key={index}>{loot}</p>
            ))}
          </Styled.Card>
          <Styled.Card>
            <h3>Current Loot</h3>
            <p>{currentLoot.toFixed(2)}</p>
          </Styled.Card>
          <Styled.Card>
            <h3>Stake Per Round</h3>
            {stakePerRoundHistory.map((stake, index) => (
              <p key={index}>{stake}</p>
            ))}
          </Styled.Card>
          <Styled.Card>
            <h3>Threshold</h3>
            {thresholdHistory.map((thresh, index) => (
              <p key={index}>{thresh}</p>
            ))}
          </Styled.Card>
          <Styled.Card>
            <h3>P&L</h3>
            <p>
              <span className={profitLoss >= 0 ? 'green' : 'red'}>
                {profitLoss.toFixed(2)}
              </span>
            </p>
          </Styled.Card>
          <Styled.LargeCard>
            <h3>Result History</h3>
            {resultHistory.map((entry, index) => (
              <Styled.HighlightedText
                key={index}
                color={entry > threshold ? 'yellow' : 'red'}
              >
                {entry.toFixed(2)}
              </Styled.HighlightedText>
            ))}
          </Styled.LargeCard>
        </Styled.CardContainer>
        <div>
          <h3>Initial Loot</h3>
          <Styled.Input
            type="number"
            placeholder="Initial Loot"
            value={initialLoot}
            onChange={(e) => setInitialLoot(parseFloat(e.target.value))}
            onKeyPress={handleInitialLootKeyPress}
          />
          <h3>Stake Per Round</h3>
          <Styled.Input
            type="number"
            placeholder="Stake Per Round"
            value={stakePerRound}
            onChange={(e) => setStakePerRound(parseFloat(e.target.value))}
            onKeyPress={handleStakePerRoundKeyPress}
          />
          <h3>Threshold</h3>
          <Styled.Input
            type="number"
            placeholder="Threshold"
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
            onKeyPress={handleThresholdKeyPress}
          />
          <h3>Result</h3>
          <Styled.Input
            type="number"
            placeholder="Result"
            step="0.01"
            value={result}
            onChange={(e) => setResult(parseFloat(e.target.value))}
            onKeyPress={handleResultKeyPress}
          />
        </div>
      </Styled.Container>
    </main>
  );
};

export default Home;
