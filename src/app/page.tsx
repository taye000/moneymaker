"use client";
import { useState } from 'react';
import { Container, CardContainer, Card, LargeCard, Input, HighlightedText } from './styled';

export default function Home() {
  const [initialLoot, setInitialLoot] = useState('');
  const [result, setResult] = useState('');
  const [initialLootHistory, setInitialLootHistory] = useState<string[]>([]);
  const [resultHistory, setResultHistory] = useState<number[]>([]);

  const handleInitialLootChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialLoot(e.target.value);
  };

  const handleResultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  const handleInitialLootKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && initialLoot !== '') {
      setInitialLootHistory([initialLoot, ...initialLootHistory]);
      setInitialLoot('');
    }
  };

  const handleResultKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && result !== '') {
      const value = parseFloat(result);
      if (!isNaN(value)) {
        setResultHistory([value, ...resultHistory]);
      }
      setResult('');
    }
  };

  return (
    <main>
      <Container>
        <CardContainer>
          <Card>
            <h3>Initial Loot</h3>
            {initialLootHistory.map((loot, index) => (
              <p key={index}>{loot}</p>
            ))}
          </Card>
          <Card>
            <h3>Current Loot</h3>
            <p>{result}</p>
          </Card>
          <Card>
            <h3>P&L</h3>
            <p>{(resultHistory.reduce((acc, val) => acc + val, 0) - parseFloat(initialLootHistory[0] || '0')).toFixed(2)}</p>
          </Card>
          <LargeCard>
            <h3>Result History</h3>
            {resultHistory.map((entry, index) => (
              <HighlightedText key={index}>{entry.toFixed(2)}</HighlightedText>
            ))}
          </LargeCard>
        </CardContainer>
        <div>
          <Input
            type="number"
            placeholder="Initial Loot"
            value={initialLoot}
            onChange={handleInitialLootChange}
            onKeyPress={handleInitialLootKeyPress}
          />
          <Input
            type="number"
            placeholder="Result"
            step="0.01"
            value={result}
            onChange={handleResultChange}
            onKeyPress={handleResultKeyPress}
          />
        </div>
      </Container>
    </main>
  );
}
