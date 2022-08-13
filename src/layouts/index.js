import * as React from 'react'
import Navigation from '../components/Navigation/Navigation';

const MainLayouts = ({children}) => (
    <>
        <Navigation/>
        {children}
    </>
)


export default MainLayouts;
