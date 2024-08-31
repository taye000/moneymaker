"use client";
import React from 'react';
import {
    Container,
    ContentWrapper,
    Header,
    Button,
    ProfileCard,
    ProfileInfo,
    ProfilePhoto,
    ProfileWrapper // Import the new ProfileWrapper component
} from '@/app/styled';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import withAuth from '../components/withAuth';
import Loader from '../components/Loading';

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

    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Profile</h1>
                </Header>
                <ProfileWrapper>
                    <ProfileCard>
                        <ProfilePhoto
                            src={user?.photo || defaultPhoto}
                            alt={`${user?.name}'s Profile Photo`}
                        />
                        <ProfileInfo>
                            <h2>{user?.name}</h2>
                            <p>{user?.email}</p>
                            <Button
                                onClick={handleLogout}
                                style={{ marginTop: '10px', backgroundColor: '#ff4d4f' }}
                            >
                                Logout
                            </Button>
                        </ProfileInfo>
                    </ProfileCard>
                </ProfileWrapper>
            </ContentWrapper>
        </Container>
    );
};

export default withAuth(ProfilePage);
