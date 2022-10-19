import React from 'react';
import Image from 'gatsby-image';

const PostLayout = ({ data }) => <Image fixed={data.datoCmsArticle.image.fixed} />;

export default PostLayout;
