"use client";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { ContentWrapper } from './styled';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <ContentWrapper>
            {children}
          </ContentWrapper>
          <Footer />
        </ThemeProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
          }}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: theme.colors.background,
              color: theme.colors.text,
              borderRadius: '8px',
              border: `1px solid ${theme.colors.border}`,
              fontSize: theme.fontSizes.medium,
              padding: theme.spacing.medium,
            },
            success: {
              style: {
                background: theme.colors.green,
                color: '#fff',
              },
            },
            error: {
              style: {
                background: theme.colors.red,
                color: '#fff',
              },
            },
            loading: {
              style: {
                background: theme.colors.primary,
                color: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
