'use client'

import React from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function ErrorFallback({
  title = 'Something went wrong',
  message = 'A server error occurred. Please refresh or try again later.',
  onRetry,
}) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant='h4' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body1' sx={{ mb: 3, maxWidth: 400 }}>
        {message}
      </Typography>
      <Button variant='contained' onClick={onRetry}>
        Refresh
      </Button>
    </Box>
  )
}
