import React from 'react';
import { Button } from '@mui/material';

export const CustomButton = ({ link, text }) => (
    <Button
        href={link}
        sx={{
            width: '150px',
            margin: '10px 20px',
            '&:hover': {
                fontWeight: 600,
            },
        }}
    >
        {text}
    </Button>
);
