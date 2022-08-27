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
        background-color: #121924;
        margin-left: 250px;
        color: #fff;
    }

    a {
        color: #fff;
        cursor: pointer;
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
