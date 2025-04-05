'use client'
import { useRouter } from 'next/navigation'
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material'
import { useGetSalesSummary } from '@/hooks/sales'
import ErrorFallback from '@/components/ErrorFallback'
import SkeletonSummary from './_components/SalesSummarySkeleton'

export default function SalesSummaryPage() {
  const router = useRouter()
  const { data = [], isLoading, isError, refetch } = useGetSalesSummary()

  if (isError)
    return (
      <ErrorFallback
        title='Failed to Load Sales Summary'
        message='We couldn’t load the sales rep summary. Please try again.'
        onRetry={refetch}
      />
    )

  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <Grid container spacing={3} justifyContent='center'>
        {isLoading
          ? Array.from({ length: 8 }, (_, i) => <SkeletonSummary key={i} />)
          : data.map((rep) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={rep.id}>
                <Card
                  onClick={() => router.push(`/sales/${rep.id}`)}
                  sx={{
                    cursor: 'pointer',
                    width: '100%',
                    height: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mb: 2 }}>
                      {rep.name[0].toUpperCase()}
                    </Avatar>
                    <Typography variant='h6' fontWeight={'bold'}>
                      {rep.name}
                    </Typography>
                    <Typography variant='body2'>{rep.role}</Typography>
                    <Typography variant='body2'>{rep.region}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  )
}
