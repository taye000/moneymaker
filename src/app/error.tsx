"use client";
import React from 'react';
import { Container, Title, Button } from './styled';
import Link from 'next/link';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
    return (
        <Container>
            <Title>Something Went Wrong</Title>
            <p>We’re sorry, but an error occurred. Please try again later.</p>
            <button onClick={() => reset()}>Retry</button>
            <Link href="/">
                <Button>Go Home</Button>
            </Link>
        </Container>
    );
};

export default ErrorPage;
