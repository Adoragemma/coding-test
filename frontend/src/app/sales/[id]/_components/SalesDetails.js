'use client'
import React from 'react'
import { useGetSalesRepDeatils } from '@/hooks/sales'
import { Typography, Box, Button } from '@mui/material'
import SalesRepCard from './SalesRepCard'
import ErrorFallback from '@/components/ErrorFallback'
import SalesDetailsSkeleton from './SalesDetailsSkeleton'
import { useRouter } from 'next/navigation'

export default function SalesDetails({ salesId }) {
  const router = useRouter()
  const { data, isLoading, isError, refetch } = useGetSalesRepDeatils(salesId)

  if (isLoading) return <SalesDetailsSkeleton />

  if (isError)
    return (
      <ErrorFallback
        title='Failed to Load Sales Rep Details'
        message='There was a problem loading the data. Please try again.'
        onRetry={refetch}
      />
    )

  return (
    <Box>
      <Button variant='outlined' onClick={() => router.back()} sx={{ mb: 2 }}>
        Back
      </Button>
      <Typography variant='h4' gutterBottom>
        Sales Rep Details
      </Typography>
      <SalesRepCard data={data} />
    </Box>
  )
}
