import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#d1e3ff', // Soft pastel blue
      main: '#a6c8ff',  // Softer blue
      dark: '#7496cc',  // Slightly darker blue
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffe5d9', // Soft pastel peach
      main: '#ffbfa3',  // Softer peach
      dark: '#cc967f',  // Slightly darker peach
      contrastText: '#000000',
    },
    background: {
      default: '#f9f9f9', // Light gray for a soft background
      paper: '#ffffff',   // White for paper elements
    },
    text: {
      primary: '#333333', // Softer black for primary text
      secondary: '#555555', // Softer gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', lineHeight: 1.43 },
  },
  shape: {
    borderRadius: 8, // Softer rounded corners
  },
});

export default theme;