import * as React from 'react';
import { Link } from 'gatsby';
import MainLayouts from '../layouts';
import Seo from '../components/seo';

const AboutPage = () => (
    <MainLayouts>
        <h1>Hi from the About Page</h1>
        <p>Welcome to About Page</p>
        <Link to="/">Go back to the homepage</Link>
    </MainLayouts>
);

export const Head = () => <Seo title="About Page" />;

export default AboutPage;
