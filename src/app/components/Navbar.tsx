"use client";
import { useState } from 'react';
import {
    NavbarContainer,
    Logo,
    NavLinks,
    NavLink,
    AuthButton,
    MobileMenuButton,
    MobileNavLinks,
} from '../styled';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = async () => {
        try {
            await logout();
            // Additional handling if needed
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <NavbarContainer>
            <Logo href="/">Moneymakers</Logo>
            <NavLinks>
                <NavLink href="/stats">Stats</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/dashboard">Dashboard</NavLink>
                {isAuthenticated ? (
                    <AuthButton onClick={handleLogout}>Logout</AuthButton>
                ) : (
                    <AuthButton href="/auth/login">Login</AuthButton>
                )}
            </NavLinks>
            <MobileMenuButton onClick={toggleMobileMenu}>
                ☰
            </MobileMenuButton>
            {isMobileMenuOpen && (
                <MobileNavLinks>
                    <NavLink href="/stats">Stats</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                    {isAuthenticated ? (
                        <AuthButton onClick={handleLogout}>Logout</AuthButton>
                    ) : (
                        <AuthButton href="/auth/login">Login</AuthButton>
                    )}
                </MobileNavLinks>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
