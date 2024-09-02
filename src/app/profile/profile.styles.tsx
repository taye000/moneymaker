"use client";
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.large} 0;
`;

export const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.large};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.cardShadow};
    margin-top: ${({ theme }) => theme.spacing.large};
    width: 100%;
    max-width: 500px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.cardShadow} 0 10px 20px;
    }
`;

export const ProfilePhoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${({ theme }) => theme.spacing.large};
    border: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 0;
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSizes.large};
        margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        margin: 0;
    }
`;

export const ProfileDetailSection = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: ${({ theme }) => theme.spacing.large};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.cardShadow};
    margin-top: ${({ theme }) => theme.spacing.large};
    width: 100%;
    max-width: 500px;

    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        margin: ${({ theme }) => theme.spacing.small} 0;
    }
`;

export const SectionTitle = styled.h3`
    margin: 0 0 ${({ theme }) => theme.spacing.medium} 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding-bottom: ${({ theme }) => theme.spacing.small};
`;

export const PreferenceRow = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin-top: ${({ theme }) => theme.spacing.large};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};

        button {
            width: 100%;
        }
    }
`;
