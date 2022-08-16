import * as React from 'react';
import MainLayouts from '../layouts';
import Seo from '../components/seo';

const NotFoundPage = () => (
    <MainLayouts>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MainLayouts>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
