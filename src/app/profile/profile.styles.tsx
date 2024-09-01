"use client";
import styled from 'styled-components';

export const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.cardShadow};
    margin-top: ${({ theme }) => theme.spacing.large};
`;

export const ProfilePhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${({ theme }) => theme.spacing.medium};
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        margin: 0;
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSizes.large};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        margin: ${({ theme }) => theme.spacing.small} 0;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.large} 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.medium} 0;
    }
`;