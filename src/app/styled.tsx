import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 8px;
  width: 150px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const LargeCard = styled(Card)`
  width: 300px;

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const HighlightedText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: block;
  margin: ${({ theme }) => theme.spacing.small} 0;

  &.yellow {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &.red {
    color: ${({ theme }) => theme.colors.red};
  }
`;

// export const HighlightedText = styled.span<{ color: 'green' | 'red' }>`
//   font-size: ${({ theme }) => theme.fontSizes.medium};
//   display: block;
//   margin: ${({ theme }) => theme.spacing.small} 0;
//   color: ${({ color, theme }) => (color === 'green' ? theme.colors.green : theme.colors.red)};
// `;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const GreenText = styled.span`
  color: ${({ theme }) => theme.colors.green};
`;

export const RedText = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
