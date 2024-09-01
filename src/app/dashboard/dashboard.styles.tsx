"use client";
import { FaTrash } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: auto; // Allow the button to shrink on smaller screens
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small};
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
  color: ${({ theme }) => theme.colors.textOnPrimary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
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
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const Section = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const CardValue = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  svg {
    margin-right: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const BoldValue = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${({ theme }) => theme.spacing.small};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
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
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  margin-top: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const NewResultItem = styled(ResultItem)`
  animation: ${fadeIn} 0.5s ease-out;
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const InputGroupSection = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const InputLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const NumberInput = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  width: 100%;
`;

export const HelpTextContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const HelpIcon = styled.div`
  cursor: pointer;
`;

export const HelpText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  position: absolute;
  margin-left: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  white-space: nowrap;
  
  ${HelpIcon}:hover + & {
    opacity: 1;
    visibility: visible;
  }
`;

export const AmountText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const AmountLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const StatItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const StatTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ResultDetails = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
`;

export const ResultTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ResultDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const CapitalSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const SummaryTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const SummaryText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ProfitLossIndicator = styled.span<{ $profit: boolean }>`
  color: ${({ theme, $profit }) => ($profit ? theme.colors.green : theme.colors.red)};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

export const ProfitLossCard = styled(DashboardCard)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  margin-left: ${({ theme }) => theme.spacing.small};
  &:hover {
    color: ${({ theme }) => theme.colors.dangerHover};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerHover};
  }
`;

export const ResultItemContent = styled.div`
  flex: 1;
`;

export const ResultItemActions = styled.div`
  display: flex;
  align-items: center;
`;

export const NoResultsMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.large};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
