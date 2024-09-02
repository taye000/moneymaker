"use client";
import React from 'react';
import {
    Container,
    ContentWrapper,
    Header,
    Button,
    AuthButton,
    RedButton,
} from '@/app/styled';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import withAuth from '../components/withAuth';
import Loader from '../components/Loading';
import {
    ProfileCard,
    ProfilePhoto,
    ProfileInfo,
    ProfileDetailSection,
    ButtonGroup,
    SectionTitle,
    ProfileWrapper,
    PreferenceRow,
} from './profile.styles';

const ProfilePage: React.FC = () => {
    const { user, loading, logout, isAuthenticated } = useAuth();
    const router = useRouter();

    const defaultPhoto = '/defaultprofileimage.jpg';

    if (loading) {
        return (
            <Container>
                <ContentWrapper>
                    <Header>
                        <h1>Profile</h1>
                    </Header>
                    <Loader />
                </ContentWrapper>
            </Container>
        );
    }

    if (!isAuthenticated) {
        router.push('/auth/login');
        return null;
    }

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully.');
            router.push('/');
        } catch (error) {
            toast.error('Failed to log out.');
            console.error('Logout error:', error);
        }
    };

    const handleEditProfile = () => {
        router.push('/profile/edit'); // Redirect to the edit profile page
    };

    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Profile</h1>
                </Header>
                <ProfileWrapper>
                    {/* Personal Info Section */}
                    <ProfileCard>
                        <ProfilePhoto
                            src={user?.photo || defaultPhoto}
                            alt={`${user?.name}'s Profile Photo`}
                        />
                        <ProfileInfo>
                            <h2>{user?.name}</h2>
                            <p>{user?.email}</p>
                        </ProfileInfo>
                    </ProfileCard>

                    {/* Additional Details Section */}
                    <ProfileDetailSection>
                        <SectionTitle>Preferences</SectionTitle>
                        {user?.shortcuts?.stake && user.shortcuts.stake.length > 0 && (
                            <PreferenceRow>
                                <p><strong>Stake Shortcuts:</strong> {user.shortcuts.stake.join(', ')}</p>
                            </PreferenceRow>
                        )}
                        {user?.shortcuts?.breakEven && user.shortcuts.breakEven.length > 0 && (
                            <PreferenceRow>
                                <p><strong>Break-even Shortcuts:</strong> {user.shortcuts.breakEven.join(', ')}</p>
                            </PreferenceRow>
                        )}
                        <PreferenceRow>
                            <p><strong>Result Enabled:</strong> {user?.shortcuts?.result?.enabled ? 'Yes' : 'No'}</p>
                        </PreferenceRow>
                    </ProfileDetailSection>

                    <ButtonGroup>
                        <RedButton onClick={handleLogout}>Logout</RedButton>
                        <Button onClick={handleEditProfile}>Edit Profile</Button>
                    </ButtonGroup>
                </ProfileWrapper>
            </ContentWrapper>
        </Container>
    );
};

export default withAuth(ProfilePage);
