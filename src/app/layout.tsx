"use client";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ReactNode } from 'react';
import GlobalStyle from './GlobalStyles';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
