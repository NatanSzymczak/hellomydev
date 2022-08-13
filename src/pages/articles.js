import * as React from "react";
import {Link} from "gatsby";
import Seo from "../components/seo";
import MainLayouts from "../layouts";

const ArticlesPage = () => (
    <MainLayouts>
        <h1>Hi from the Articles Page</h1>
        <p>Welcome to Articles Page</p>
        <Link to="/">Go back to the homepage</Link>
    </MainLayouts>
)

export const Head = () => <Seo title="Articles Page"/>

export default ArticlesPage
