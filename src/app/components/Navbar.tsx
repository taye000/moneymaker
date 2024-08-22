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

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <NavbarContainer>
            <Logo href="/">Moneymakers</Logo>
            <NavLinks>
                <NavLink href="/stats">Stats</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/dashboard">Dashboard</NavLink>
                <AuthButton>Login</AuthButton>
            </NavLinks>
            <MobileMenuButton onClick={toggleMobileMenu}>
                ☰
            </MobileMenuButton>
            {isMobileMenuOpen && (
                <MobileNavLinks>
                    <NavLink href="/stats">Stats</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                    <AuthButton>Login</AuthButton>
                </MobileNavLinks>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
