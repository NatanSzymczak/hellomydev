import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Navigation from "../components/Navigation/Navigation";

const IndexPage = () => (
  <>
      <Navigation/>
    <Seo title="Home" />
  </>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
