import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Loader from './Loading';

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
            return <Loader/>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
