import React from 'react';
import { Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { darkTheme } from '../../assets/styles/theme';

export const Social = () => (
    <Link to={'/'}>
        <InstagramIcon
            sx={{
                fontSize: 40,
                marginBottom: '20px',
                '&:hover': {
                    color: darkTheme.palette.primary.dark,
                },
            }}
        />
    </Link>
);
