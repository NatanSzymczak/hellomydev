import * as React from 'react';
import { Link } from 'gatsby';
import MainLayouts from '../layouts';
import Seo from '../components/seo';

const ContactPage = () => (
    <MainLayouts>
        <h1>Hi from the Contact Page</h1>
        <p>Welcome to Contact Page</p>
        <Link to="/">Go back to the homepage</Link>
    </MainLayouts>
);

export const Head = () => <Seo title="Contact Page" />;

export default ContactPage;
