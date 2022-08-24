import * as React from 'react';
import MainLayouts from '../layouts';
import Seo from '../components/seo';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ArticlesPage = () => {
    return (
        <MainLayouts>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            Card Title
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Ullamco proident magna non nulla ex ullamco. Tempor adipisicing laboris occaecat aute Lorem culpa quis magna commodo dolore id aliquip. Commodo anim amet aliqua amet tempor elit aliquip exercitation culpa dolor quis dolor. Nulla duis duis ipsum aliqua adipisicing aliqua ullamco cupidatat proident occaecat enim ea est. Minim adipisicing exercitation elit enim deserunt tempor eu est esse culpa commodo. Mollit nisi incididunt adipisicing Lorem labore commodo dolore consectetur ex aliqua sint adipisicing et esse excepteur. Velit mollit pariatur est consectetur Lorem do proident cupidatat. Reprehenderit Lorem veniam pariatur mollit. Occaecat aliquip ut Lorem duis in cupidatat amet esse aliqua incididunt deserunt. Nostrud esse in id aliqua ad elit excepteur.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </MainLayouts>
    );
};

export const Head = () => <Seo title="Articles Page" />;

export default ArticlesPage;
