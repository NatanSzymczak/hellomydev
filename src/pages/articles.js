import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MainLayouts from '../layouts';
import Seo from '../components/seo';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ArticlesPage = () => {
    const data = useStaticQuery(query);

    return (
        <MainLayouts>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        </MainLayouts>
    );
};

const query = graphql`
    {
        file(name: { eq: "lizard" }) {
            childImageSharp {
                gatsbyImageData(width: 450)
            }
        }
    }
`;

export const Head = () => <Seo title="Articles Page" />;

export default ArticlesPage;
