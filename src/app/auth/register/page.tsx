import { Container, ContentWrapper, Header, Form, Label, Input, Button, AuthButton } from '@/app/styled';
import React from 'react';

const SignUpPage: React.FC = () => {
    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Sign Up</h1>
                </Header>
                <Form>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" required />

                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required />

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" required />

                    <Button type="submit">Sign Up</Button>
                </Form>

                <AuthButton href='/auth/forgot-password'>Forgot Password</AuthButton>
            </ContentWrapper>
        </Container>
    );
};

export default SignUpPage;
