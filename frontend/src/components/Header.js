'use client'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          component={Link}
          href='/'
        >
          Sales Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
