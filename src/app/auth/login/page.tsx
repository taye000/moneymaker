import { Container, ContentWrapper, Header, Form, Label, Input, Button, AuthButton } from '@/app/styled';
import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Login</h1>
                </Header>
                <Form>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required />

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" required />

                    <Button type="submit">Login</Button>
                </Form>

                <AuthButton href='/auth/register'>Register</AuthButton>
            </ContentWrapper>
        </Container>
    );
};

export default LoginPage;
