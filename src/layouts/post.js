import React from 'react';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
    query querySingleArticle($id: String!) {
        datoCmsArticle(id: { eq: $id }) {
            image {
                fixed(width: 500) {
                    ...GatsbyDatoCmsFixed_tracedSVG
                }
            }
        }
    }
`;

const PostLayout = ({ data }) => <Image fixed={data.datoCmsArticle.image.fixed} />;

export default PostLayout;
