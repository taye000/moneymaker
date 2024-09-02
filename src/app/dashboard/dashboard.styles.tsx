"use client";
import { FaTrash } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: auto;
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
  grid-template-columns: repeat(6, 1fr); /* Default to 6 columns */
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  margin-top: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    max-height: calc(8 * 100px); 
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumTablet}) {
    max-height: calc(6 * 100px);
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: calc(5 * 100px); 
    grid-template-columns: repeat(2, 1fr);
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
  margin-bottom: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  margin-top: ${({ theme }) => theme.spacing.small};
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
  flex-direction: column;
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

export const ShortcutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

export const ShortcutCard = styled.div<{ $isSelected?: boolean }>`
  width: 40px;
  height: 30px;
  background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.primary : theme.colors.secondary)};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const InputSection = styled.div`
  margin-bottom: 30px;
`;

export const InputsLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const NumbersInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
`;

export const AddResultButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.successHover};
  }
`;