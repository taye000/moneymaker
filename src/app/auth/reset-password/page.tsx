"use client";
import { Container, ContentWrapper, Header, Form, Label, Input, Button } from '@/app/styled';
import React from 'react';

const RecoverPasswordPage: React.FC = () => {
    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <h1>Recover Password</h1>
                </Header>
                <Form>
                <Label htmlFor="recoveryCode">Recovery Code</Label>
                    <Input type="text" id="recoveryCode" name="recoveryCode" required />

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" required />

                    <Button type="submit">Send</Button>
                </Form>
            </ContentWrapper>
        </Container>
    );
};

export default RecoverPasswordPage;
