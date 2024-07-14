export const theme = {
    colors: {
        primary: '#28a745', // green
        secondary: '#dc3545', // red
        text: '#ffffff', // white
        background: '#333333', // dark background
        border: '#e0e0e0', // light grey for borders
        highlight: '#ffc107', // yellow for highlighting
    },
    fontSizes: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xlarge: '2rem',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
        xlarge: '32px',
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
    },
};

export type Theme = typeof theme;
