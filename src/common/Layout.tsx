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
                height: '100%', // Matches page-frame height
                width: '100%', // Matches page-frame width
                backgroundColor: '#f5f5f5',
                overflow: 'hidden', // Prevents content overflow
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%', // Matches page-container height
                    width: '100%', // Matches page-container width
                    maxWidth: '420px', // Matches page-container max-width
                    backgroundColor: '#fff',
                    border: '1px solid black',
                    borderRadius: '8px',
                    overflowY: 'scroll', // Matches page-container overflow-y
                    boxSizing: 'border-box',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Layout;