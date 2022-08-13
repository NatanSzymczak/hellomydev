import * as React from 'react'
import Navigation from '../components/Navigation/Navigation';
import GlobalStyle from "../assets/styles/globalStyles";

const MainLayouts = ({children}) => (
    <>
        <GlobalStyle/>
        <Navigation/>
        {children}
    </>
)


export default MainLayouts;
