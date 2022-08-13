import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import styled from "styled-components";
import MainLayouts from "../layouts";

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8eb814;
`;

const ArticlesPage = () => (
  <MainLayouts>
      <StyledDiv />
      <h1>Hi from the Articles Page</h1>
      <p>Welcome to Articles Page</p>
      <Link to="/">Go back to the homepage</Link>
  </MainLayouts>
)

export const Head = () => <Seo title="Articles Page" />

export default ArticlesPage
