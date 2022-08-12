import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const AboutPage = () => (
  <>
    <h1>Hi from the About Page</h1>
    <p>Welcome to About Page</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export const Head = () => <Seo title="About Page" />

export default AboutPage
