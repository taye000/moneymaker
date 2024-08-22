export const theme = {
  colors: {
    background: '#f4f4f9', // Light grey background
    text: '#333', // Dark grey text
    primary: '#1a73e8', // Blue for primary elements
    secondary: '#0a58ca', // Slightly lighter blue for secondary elements
    highlight: '#d32f2f', // Red for highlights and negative feedback
    border: '#ccc', // Light grey for borders
    yellow: '#ffeb3b', // Optional yellow
    green: '#388e3c', // Green for positive feedback
    neutralLight: '#e0e0e0', // Light grey neutral
    red: '#f44336', // Red for errors
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  breakpoints: {
    mobile: '768px',
  },
};

export type Theme = typeof theme;
