"use client";
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
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
  border-radius: 10px;
  width: 150px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: 768px) {
    width: auto; // Allow the button to shrink on smaller screens
  }
`;

export const IconButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallCard = styled(Card)`
  width: 100px;
  padding: ${({ theme }) => theme.spacing.small};
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

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  display: block;
`;

export const GreenText = styled.span`
  color: ${({ theme }) => theme.colors.green};
`;

export const RedText = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;


export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const AuthButton = styled.button`
  background-color: ${({ theme }) => theme.colors.highlight};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const MobileNavLinks = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};

  ${NavLink} {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};

  a {
    color: white;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  a {
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const SubscribeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};

  input {
    width: 300px;
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: 10px;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  max-width: 1200px; /* Adjust max-width for better readability */
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white}; /* Adding a background color for contrast */
  border-radius: ${({ theme }) => theme.borderRadius}; /* Rounded corners for better aesthetics */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a lifted effect */

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary}; /* Highlighting important text */
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-weight: bold; /* Make the title stand out */
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 10px;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  min-height: 400px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  max-width: 50%;
  padding: ${({ theme }) => theme.spacing.medium};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  button {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;

export const DashboardContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

export const DashboardCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  width: 100%;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const CapitalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  h3 {
    color: ${({ theme }) => theme.colors.text}; /* Use text color for h3 elements */
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

// Define the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px); // Optional: slight upward movement
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ResultCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;

  @media (min-width: 768px) {
    grid-template-rows: repeat(3, minmax(100px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-rows: repeat(5, minmax(100px, 1fr));
  }
`;

export const ResultItem = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const NewResultItem = styled(ResultItem)`
  animation: ${fadeIn} 0.5s ease-out;
`;


export const InputGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  flex: 1 1 calc(50% - ${({ theme }) => theme.spacing.medium}); /* Two inputs per row with space between */
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 1 1 100%; /* Full width on smaller screens */
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
`;

export const NumberInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;


export const ResultText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

// Profit/Loss Indicator
export const ProfitLossIndicator = styled.span<{ $profit: boolean }>`
  color: ${({ theme, $profit }) => ($profit ? theme.colors.green : theme.colors.red)};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

export const ProfitLossCard = styled(DashboardCard)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
