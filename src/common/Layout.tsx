import React from 'react';
import Box from '@mui/material/Box';

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
                backgroundColor: '#f5f5f5',
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
                    backgroundColor: '#fff',
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