import React from 'react';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import MainLayouts from '../layouts';

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

const PostLayout = ({ data }) => {
    return (
        <MainLayouts>
            <div>
                <Image fixed={data.datoCmsArticle.image.fixed} />
            </div>
        </MainLayouts>
    );
};

export default PostLayout;
