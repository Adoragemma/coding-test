import { Card, Grid, Skeleton } from '@mui/material'

export default function SkeletonSummary() {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <Card
        sx={{
          width: '100%',
          height: 250,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
          padding: 2,
        }}
      >
        <Skeleton variant='circular' width={64} height={64} sx={{ mb: 2 }} />
        <Skeleton width='60%' height={28} />
        <Skeleton width='40%' height={20} />
        <Skeleton width='50%' height={20} />
      </Card>
    </Grid>
  )
}
