import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { Container } from '@mui/material'
import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'

export const metadata = {
  title: 'Sales Dashboard',
  description:
    'A modern dashboard for tracking sales representatives, managing client relationships, and analyzing regional performance in real time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ReactQueryProvider>
            <Header />
            <Container sx={{ mt: 4 }}>{children}</Container>
            <ChatBot />
          </ReactQueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
