"use client";
import { Container, ContentWrapper, Header, Form, Label, Input, Button, AuthButton } from '@/app/styled';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            // Store the JWT in a cookie
            document.cookie = `token=${data.token}; Path=/; HttpOnly; Secure;`;
            router.push('/dashboard');
        } else {
            alert(data.message);
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
