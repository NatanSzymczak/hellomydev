import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const ContactPage = () => (
  <Layout>
    <h1>Hi from the Contact Page</h1>
    <p>Welcome to Contact Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Contact Page" />

export default ContactPage
