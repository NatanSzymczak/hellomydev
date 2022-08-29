import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from '../assets/styles/theme';
import Navigation from '../components/Navigation/Navigation';
import { GlobalStyle } from '../assets/styles/globalStyles';

const MainLayouts = ({ children }) => (
    <ThemeProvider theme={darkTheme}>
        <Navigation />
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default MainLayouts;
