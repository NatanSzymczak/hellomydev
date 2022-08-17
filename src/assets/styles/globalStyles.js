import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #023047;
    }
    
    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
