"use client";
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
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
    color: ${({ theme }) => theme.colors.textOnPrimary};
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
    color: ${({ theme }) => theme.colors.textOnPrimary};
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
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    input, button {
      width: 100%;
    }
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