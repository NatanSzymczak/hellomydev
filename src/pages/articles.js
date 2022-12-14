import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MainLayouts from '../layouts';
import Seo from '../components/seo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import slugify from 'slugify';
import styled from 'styled-components';

const PostListWrapper = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 20px;
    //border: 1px solid red;
`;

const Post = styled.nav`
    margin: 30px;
    //margin-bottom: 4vh;
`;

const ArticlesPage = () => {
    const data = useStaticQuery(query);

    return (
        <MainLayouts>
            <PostListWrapper>
                {data.allDatoCmsArticle.nodes.map(post => (
                    <Post>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link
                                    href={`articles/${slugify(post.title, {
                                        lower: true,
                                    })}`}
                                    underline={'none'}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={post.image.url}
                                        alt="green iguana"
                                    />
                                    {console.log(data)}
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Lizards are a widespread group of squamate reptiles,
                                            with over 6,000 species, ranging across all continents
                                            except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Post>
                ))}
            </PostListWrapper>
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
