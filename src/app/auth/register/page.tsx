"use client";
import { Container, ContentWrapper, Header, Form, Label, Input, Button, AuthButton } from '@/app/styled';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const SignUpPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Show spinner

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                // Store the JWT in a cookie
                document.cookie = `token=${data.token}; Path=/;`;
                toast.success('Registration successful! Redirecting to dashboard...');
                router.push('/dashboard');
            } else {
                toast.error(data.message || 'Registration failed.');
            }
        } catch (error) {
            toast.error('An error occurred during registration.');
        } finally {
            setLoading(false); // Hide spinner
        }
    };

    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Sign Up</h1>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? <ClipLoader size={20} color="#fff" /> : 'Sign Up'}
                    </Button>
                </Form>

                <AuthButton href='/auth/forgot-password'>Forgot Password</AuthButton>
            </ContentWrapper>
        </Container>
    );
};

export default SignUpPage;
