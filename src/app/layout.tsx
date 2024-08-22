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
        <Toaster />
      </body>
    </html>
  );
}
