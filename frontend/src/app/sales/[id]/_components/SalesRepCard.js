import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material'

export default function SalesRepDetails({ data }) {
  return (
    <Box sx={{ p: { sm: 3 } }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant='h5'>{data.name}</Typography>
          <Typography color='text.secondary'>
            {data.role} - {data.region}
          </Typography>
          <Box mt={2}>
            <Typography variant='subtitle1'>Skills:</Typography>
            <Grid container spacing={1}>
              {data.skills.map((skill, index) => (
                <Grid item key={index}>
                  <Chip label={skill} color='primary' />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Typography variant='h6' gutterBottom>
        Deals
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.deals.map((deal, idx) => (
              <TableRow key={idx}>
                <TableCell>{deal.client}</TableCell>
                <TableCell>${deal.value.toFixed(2)}</TableCell>
                <TableCell>{deal.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant='h6' gutterBottom>
        Clients
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.clients.map((client, idx) => (
              <TableRow key={idx}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.industry}</TableCell>
                <TableCell>{client.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
