import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'

export default function SalesDetailsSkeleton() {
  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        <Skeleton width={250} />
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 2,
        }}
      >
        <Skeleton variant='text' width='40%' height={32} />
        <Skeleton variant='text' width='30%' height={24} />
        <Skeleton variant='rectangular' width='100%' height={150} />
        <Skeleton variant='rectangular' width='100%' height={300} />
      </Box>
    </Box>
  )
}
