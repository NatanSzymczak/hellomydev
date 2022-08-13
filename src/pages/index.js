import * as React from "react"
import Seo from "../components/seo"
import MainLayouts from "../layouts";

const IndexPage = () => (
  <MainLayouts>
    <Seo title="Home" />
  </MainLayouts>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
