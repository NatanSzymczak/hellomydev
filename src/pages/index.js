import * as React from "react"
import Seo from "../components/seo"
import MainLayouts from "../layouts";

const IndexPage = () => (
  <MainLayouts>
    <Seo title="Home" />
      <p>Home page</p>
  </MainLayouts>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
