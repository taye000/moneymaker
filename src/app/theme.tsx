export const theme = {
  colors: {
    background: '#f4f4f9', // Light grey background
    text: '#333', // Dark grey text
    primary: '#1a73e8', // Blue for primary elements
    primaryGradient: 'linear-gradient(to right, #1a73e8, #0a58ca)', // Gradient for primary elements
    secondary: '#0a58ca', // Slightly lighter blue for secondary elements
    highlight: '#d32f2f', // Red for highlights and negative feedback
    border: '#ccc', // Light grey for borders
    yellow: '#ffeb3b', // Optional yellow
    green: '#388e3c', // Green for positive feedback
    neutralLight: '#e0e0e0', // Light grey neutral
    red: '#f44336', // Red for errors
    textOnPrimary: '#ffffff', // White text on primary elements
    textOnHighlight: '#ffffff', // White text on highlight elements
    primaryHover: '#0a58ca', // Slightly darker blue for button hover
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    lineHeight: 1.5,
    heading1: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    heading2: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    heading3: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    body: {
      fontSize: '16px',
    },
  },
  fontSizes: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  borderRadius: '8px',
  breakpoints: {
    mobile: '768px',
    smallTablet: '992px',
    largeTablet: '1200px',
  },
  shadows: {
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    navbarShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};
