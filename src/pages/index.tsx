import * as React from 'react';
import { graphql } from 'gatsby';
import MainLayouts from '../layouts';
// import Seo from '../components/seo';

function IndexPage() {
    return (
        <MainLayouts>
            {/* <Seo title="Home" /> */}
            <p>Home page</p>
        </MainLayouts>
    );
}

export const query = graphql`
    query MyQuery {
        file(name: { eq: "avatar" }) {
            publicURL
        }
    }
`;

// export const Head = () => <Seo title="Home" />

export default IndexPage;
