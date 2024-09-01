"use client";
import styled from 'styled-components';

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

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 150px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
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

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
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
  border-radius: ${({ theme }) => theme.borderRadius};
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

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.spacing.small};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  display: block;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;