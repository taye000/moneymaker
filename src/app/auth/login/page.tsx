"use client";
import { Container, ContentWrapper, Header, Form, Label, Input, Button, AuthButton } from '@/app/styled';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@/app/context/AuthContext';

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                login(data.token);
                toast.success('Login successful! Redirecting to dashboard...');
            } else {
                toast.error(data.message || 'Login failed.');
            }
        } catch (error) {
            toast.error('An error occurred during login.');
        }
    };

    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Login</h1>
                </Header>
                <Form onSubmit={handleSubmit}>
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

                    <Button type="submit">Login</Button>
                </Form>

                <AuthButton href='/auth/register'>Register</AuthButton>
            </ContentWrapper>
        </Container>
    );
};

export default LoginPage;
