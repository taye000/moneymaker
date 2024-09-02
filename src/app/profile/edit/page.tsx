"use client";
import React, { useState, useEffect } from 'react';
import {
    Container,
    ContentWrapper,
    Header,
    Form,
    Label,
    Input,
    Button,
} from '@/app/styled';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import withAuth from '../../components/withAuth';
import Loader from '../../components/Loading';

const EditProfilePage: React.FC = () => {
    const { user, loading, updateUser, isAuthenticated } = useAuth();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [stakeShortcuts, setStakeShortcuts] = useState<number[]>([]);
    const [breakEvenShortcuts, setBreakEvenShortcuts] = useState<number[]>([]);
    const [resultEnabled, setResultEnabled] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/login');
        } else if (user) {
            // Set initial state from user data
            setName(user.name || '');
            setEmail(user.email || '');
            setStakeShortcuts(user.shortcuts?.stake || []);
            setBreakEvenShortcuts(user.shortcuts?.breakEven || []);
            setResultEnabled(user.shortcuts?.result?.enabled ?? true);
        }
    }, [isAuthenticated, user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        const updates: Record<string, any> = {};

        // Check and update name if changed
        if (name && name !== user?.name) updates.name = name;

        // Check and update email if changed
        if (email && email !== user?.email) updates.email = email;

        // Check and update stake shortcuts if changed
        const filteredStakeShortcuts = stakeShortcuts.filter((val) => !isNaN(val) && val !== 0);
        if (
            filteredStakeShortcuts.length &&
            (filteredStakeShortcuts.length !== (user?.shortcuts?.stake || []).length ||
                !filteredStakeShortcuts.every((v, i) => v === (user?.shortcuts?.stake || [])[i]))
        ) {
            updates.shortcuts = { ...updates.shortcuts, stake: filteredStakeShortcuts };
        }

        // Check and update break-even shortcuts if changed
        const filteredBreakEvenShortcuts = breakEvenShortcuts.filter((val) => !isNaN(val) && val !== 0);
        if (
            filteredBreakEvenShortcuts.length &&
            (filteredBreakEvenShortcuts.length !== (user?.shortcuts?.breakEven || []).length ||
                !filteredBreakEvenShortcuts.every((v, i) => v === (user?.shortcuts?.breakEven || [])[i]))
        ) {
            updates.shortcuts = { ...updates.shortcuts, breakEven: filteredBreakEvenShortcuts };
        }

        // Check and update result enabled if changed
        if (resultEnabled !== (user?.shortcuts?.result?.enabled ?? true)) {
            updates.shortcuts = { ...updates.shortcuts, result: { enabled: resultEnabled } };
        }

        if (
            Object.keys(updates).length === 0 ||
            (updates.shortcuts && Object.keys(updates.shortcuts).length === 0)
        ) {
            toast.error("No changes to save.");
            setSaving(false);
            return;
        }

        try {
            const res = await fetch(`/api/users/${user._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Profile updated successfully!');
                updateUser(data.user);
            } else {
                toast.error('Failed to update profile.');
            }
        } catch (error) {
            toast.error('An error occurred while updating the profile.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <Container>
                <ContentWrapper>
                    <Header>
                        <h1>Edit Profile</h1>
                    </Header>
                    <Loader />
                </ContentWrapper>
            </Container>
        );
    }

    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Edit Profile</h1>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder={user?.name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder={user?.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label htmlFor="stakeShortcuts">Stake Shortcuts (comma separated)</Label>
                    <Input
                        type="text"
                        id="stakeShortcuts"
                        name="stakeShortcuts"
                        value={stakeShortcuts.join(', ')}
                        placeholder={user?.shortcuts?.stake.join(', ')}
                        onChange={(e) => {
                            const values = e.target.value.split(',').map(Number).filter(val => !isNaN(val));
                            setStakeShortcuts(values);
                        }}
                    />

                    <Label htmlFor="breakEvenShortcuts">Break Even Shortcuts (comma separated)</Label>
                    <Input
                        type="text"
                        id="breakEvenShortcuts"
                        name="breakEvenShortcuts"
                        value={breakEvenShortcuts.join(', ')}
                        placeholder={user?.shortcuts?.breakEven.join(', ')}
                        onChange={(e) => {
                            const values = e.target.value.split(',').map(Number).filter(val => !isNaN(val));
                            setBreakEvenShortcuts(values);
                        }}
                    />

                    <Label htmlFor="resultEnabled">
                        <Input
                            type="checkbox"
                            id="resultEnabled"
                            name="resultEnabled"
                            checked={resultEnabled}
                            onChange={(e) => setResultEnabled(e.target.checked)}
                        />
                        Enable Result Shortcuts
                    </Label>

                    <Button type="submit">
                        {saving ? "Saving..." : 'Save Changes'}
                    </Button>
                </Form>
            </ContentWrapper>
        </Container>
    );
};

export default withAuth(EditProfilePage);
