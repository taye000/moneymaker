"use client";
import { Container, ContentWrapper, Header, Form, Label, Input, Button, AuthButton } from '@/app/styled';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
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

                    <Button type="submit">Sign Up</Button>
                </Form>

                <AuthButton href='/auth/forgot-password'>Forgot Password</AuthButton>
            </ContentWrapper>
        </Container>
    );
};

export default SignUpPage;
