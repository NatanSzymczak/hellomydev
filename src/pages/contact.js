import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const ContactPage = () => (
  <>
    <h1>Hi from the Contact Page</h1>
    <p>Welcome to Contact Page</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export const Head = () => <Seo title="Contact Page" />

export default ContactPage
