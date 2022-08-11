import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout>
    <h1>Hi from the About Page</h1>
    <p>Welcome to About Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About Page" />

export default AboutPage
