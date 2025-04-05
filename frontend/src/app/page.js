import { Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      textAlign='center'
    >
      <Typography variant='h3' gutterBottom>
        Welcome to the Sales Dashboard
      </Typography>
      <Typography variant='h6' gutterBottom>
        Track your reps, deals, and clients easily.
      </Typography>
      <Link href='/sales' passHref>
        <Button variant='contained' size='large' sx={{ mt: 3 }}>
          Go to Sales Page
        </Button>
      </Link>
    </Box>
  )
}
