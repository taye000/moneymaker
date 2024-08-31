import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
    NavbarContainer,
    Logo,
    NavLinks,
    NavLink,
    AuthButton,
    MobileMenuButton,
    MobileNavLinks,
    ProfileMenu,
    ProfileButton,
    DropdownMenu,
    DropdownItem
} from '../styled';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
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
                {isAuthenticated && <NavLink href="/dashboard">Dashboard</NavLink>}
                {isAuthenticated ? (
                    <ProfileMenu>
                        <ProfileButton onClick={toggleProfileMenu}>
                            <FaUserCircle size={24} /> {user?.name}
                        </ProfileButton>
                        {isProfileMenuOpen && (
                            <DropdownMenu>
                                <DropdownItem href="/profile">Profile</DropdownItem>
                                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                            </DropdownMenu>
                        )}
                    </ProfileMenu>
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
                    {isAuthenticated && <NavLink href="/dashboard">Dashboard</NavLink>}
                    {isAuthenticated ? (
                        <ProfileMenu>
                            <ProfileButton onClick={toggleProfileMenu}>
                                <FaUserCircle size={24} /> {user?.name}
                            </ProfileButton>
                            {isProfileMenuOpen && (
                                <DropdownMenu>
                                    <DropdownItem href="/profile">Profile</DropdownItem>
                                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                                </DropdownMenu>
                            )}
                        </ProfileMenu>
                    ) : (
                        <AuthButton href="/auth/login">Login</AuthButton>
                    )}
                </MobileNavLinks>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
