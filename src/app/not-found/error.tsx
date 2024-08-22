"use client";
import React from 'react';
import { Container, Title, Button } from '../styled';
import Link from 'next/link';

const ErrorPage: React.FC = () => {
    return (
        <Container>
            <Title>Page Not Found</Title>
            <p>We’re sorry, but the page you’re looking for doesn’t exist.</p>
            <Link href="/">
                <Button>Go Home</Button>
            </Link>
        </Container>
    );
};

export default ErrorPage;
