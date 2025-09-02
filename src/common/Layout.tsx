import React from 'react';
import Box from '@mui/material/Box';
import theme from '../common/theme';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: theme.palette.background.default,
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: theme.palette.background.default,
                    border: '1px solid black',
                    borderRadius: '8px',
                    overflowY: 'scroll',
                    boxSizing: 'border-box',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Layout;