"use client";
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.navbarShadow};
`;

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
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
  color: ${({ theme }) => theme.colors.textOnPrimary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const AuthButton = styled.a`
  background-color: ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.textOnHighlight};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
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
  color: ${({ theme }) => theme.colors.textOnPrimary};
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

export const ProfileMenu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ProfileButton = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 8px;
    color: #fff;

    &:focus {
        outline: none;
    }

    svg {
        margin-right: 8px;
    }
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 8px 0;
    z-index: 1000;
    min-width: 150px;
`;

export const DropdownItem = styled.a`
    display: block;
    padding: 8px 16px;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;