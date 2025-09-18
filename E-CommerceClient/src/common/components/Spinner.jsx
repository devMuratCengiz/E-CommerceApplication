import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Spinner() {
    return (
        <div style={{
            position: 'fixed',    // sayfa üzerinde sabit
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255,255,255,0.6)', // yarı saydam
            backdropFilter: 'blur(5px)',              // blur efekti
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999                              // üstte görünmesi için
        }}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress color='inherit' />
            </Box>
        </div>
    )
}

export default Spinner