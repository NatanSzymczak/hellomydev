import * as React from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Seo from "../components/seo"
import MainLayouts from "../layouts";
import {graphql} from "gatsby";

const IndexPage = ({data}) => (
  <MainLayouts>

        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    <Seo title="Home" />
      <p>Home page</p>
  </MainLayouts>
)





export const query = graphql`
    query MyQuery {
        file(name: {eq: "avatar"}) {
            publicURL
        }
    }
`;


export const Head = () => <Seo title="Home" />

export default IndexPage
