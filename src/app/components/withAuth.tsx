import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const withAuth = (WrappedComponent: React.FC) => {
    return (props: any) => {
        const { isAuthenticated, loading } = useAuth();
        const router = useRouter();

        React.useEffect(() => {
            if (!loading && !isAuthenticated) {
                router.push('/auth/login');
            }
        }, [isAuthenticated, loading, router]);

        if (loading) {
            return <p>Loading...</p>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
