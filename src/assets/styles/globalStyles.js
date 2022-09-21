import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

    //button {
    //    padding: 0;
    //    cursor: pointer;
    //    font-family: 'Montserrat', sans-serif;
    //    color: #fff;
    //}

    ul {
        padding: 0;
        margin: 0;
    }
`;
