import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: 5px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    body {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    body {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

export default GlobalStyle;
