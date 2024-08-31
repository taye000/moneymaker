import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
    user: any;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
                console.log('Fetched token:', token);

                if (token) {
                    console.log('Token found, fetching user...');
                    const response = await fetch('/api/auth/me', { headers: { 'Authorization': `Bearer ${token}` } });
                    console.log('Response status:', response.status);
                    const data = await response.json();
                    console.log('Fetched user data:', data);

                    if (response.ok) {
                        setUser(data.user);
                        console.log('User set:', data.user);
                    } else {
                        console.error('Failed to fetch user:', data.message);
                        setUser(null);
                    }
                } else {
                    console.log('No token found');
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            } finally {
                setLoading(false);
                console.log('Loading complete');
            }
        };

        fetchUser();
    }, []);

    const login = (token: string) => {
        console.log('Logging in with token:', token);
        document.cookie = `token=${token}; Path=/;`;
        router.push('/dashboard');
    };

    const logout = () => {
        console.log('Logging out');
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        setUser(null);
        router.push('/auth/login');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
