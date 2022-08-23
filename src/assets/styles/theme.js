import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                size: 'large',
                variant: 'contained',
            },
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            light: '#FFB703',
            main: '#F7C631',
            dark: '#F5A410',
            contrastText: '#121924',
        },
        secondary: {
            light: '#ff7961',
            main: '#8ECAE6',
            dark: '#219EBC',
            contrastText: '#121924',
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
});
