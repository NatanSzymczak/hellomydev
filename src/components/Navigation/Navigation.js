import React from 'react';
import styled from 'styled-components';
import {Link, graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

const NavigationWrapper = styled.nav`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    top: 0;
    left: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: cornflowerblue;
    
    a {
        color: inherit;
        text-decoration: none;
    }
`;

const Logo = styled.span`
    background-color: cadetblue;
    
    margin: 10px auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
`;

const NavigationList = styled.ul`
    background-color: aqua;
    
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const NavigationListItem = styled.li`
    background-color: darkcyan;
    
    margin: 10px auto;
    font-weight: 600;
    font-size: 18px;
`;

const query = graphql`{
    file(name: { eq: "avatar" }) {
        childImageSharp {
            gatsbyImageData(
                width: 170
            )
        }
    }
}`

const Navigation = () => {
    const data = useStaticQuery(query);
    return <>
        <NavigationWrapper>
            <Logo>
                <GatsbyImage
                    image={data.file.childImageSharp.gatsbyImageData}
                    alt={'Logo'}
                />
            </Logo>
            <Logo>
                Hello my Dev !
            </Logo>
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
    </>
};


export default Navigation;