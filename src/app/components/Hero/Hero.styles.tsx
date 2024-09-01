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

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;