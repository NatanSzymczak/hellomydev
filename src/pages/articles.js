import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MainLayouts from '../layouts';
import Seo from '../components/seo';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import slugify from 'slugify';

const ArticlesPage = () => {
    const data = useStaticQuery(query);

    return (
        <MainLayouts>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <Link
                        href={`articles/${slugify(data.allDatoCmsArticle.nodes[0].title, {
                            lower: true,
                        })}`}
                        underline={'none'}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.file.childImageSharp.gatsbyImageData.images.fallback.src}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </MainLayouts>
    );
};

const query = graphql`
    {
        allDatoCmsArticle {
            nodes {
                id
                image {
                    url
                }
                title
            }
        }
    }
`;

export const Head = () => <Seo title="Articles Page" />;

export default ArticlesPage;
