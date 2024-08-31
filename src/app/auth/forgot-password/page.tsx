import { Container, ContentWrapper, Header, Form, Label, Input, Button } from '@/app/styled';
import React from 'react';

const ResetPasswordPage: React.FC = () => {
    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Reset Password</h1>
                </Header>
                <Form>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required />

                    <Button type="submit">Send Reset Link</Button>
                </Form>
            </ContentWrapper>
        </Container>
    );
};

export default ResetPasswordPage;
