import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const NavigationWrapper = styled.nav`
    position: absolute;
    top: 20px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Montserrat', sans-serif;

    a {
        color: inherit;
        text-decoration: none;
    }
;
`;

const Logo = styled.span`
    margin-right: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
`;

const NavigationList = styled.ul`
    display: flex;
    list-style: none;
`;

const NavigationListItem = styled.li`
    margin-left: 30px;
    font-weight: 600;
    font-size: 15px;
`;

const Navigation = () => (
    <NavigationWrapper>
        <Logo>HELLO MY DEV</Logo>
        <NavigationList>
            <NavigationListItem>
                <Link to={'/articles'}>
                    articles
                </Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to={'/about'}>
                    about
                </Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to={'/contact'}>
                    contact
                </Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;