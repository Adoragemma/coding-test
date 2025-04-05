'use client'
import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material'
import { ChatBubble } from '@mui/icons-material'
import { usePostAskQuestion } from '@/hooks/ai'

export default function ChatBot() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([])
  const { mutateAsync: askQuestion, isPending } = usePostAskQuestion()
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (question.trim() === '') return

    const userMessage = {
      sender: 'user',
      text: question,
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    setQuestion('')

    try {
      const { data } = await askQuestion({ prompt: question })

      const botMessage = {
        sender: 'bot',
        text: data.response || 'Sorry, I didn’t understand that.',
      }

      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (error) {
      const errorMessage = {
        sender: 'bot',
        text: 'An error occurred while getting a response. Please try again.',
      }
      setMessages((prevMessages) => [...prevMessages, errorMessage])
    }
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        <ChatBubble />
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogTitle>Chat with Us</DialogTitle>
        <DialogContent>
          <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                  gap: 2,
                  marginBottom: 1,
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: message.sender === 'user' ? 'primary.main' : 'grey.300',
                    color: message.sender === 'user' ? 'white' : 'black',
                    padding: 1.5,
                    borderRadius: 1,
                    maxWidth: '75%',
                    wordBreak: 'break-word',
                  }}
                >
                  {message.text}
                </Typography>
              </Box>
            ))}
            {isPending && (
              <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                <CircularProgress size={24} />
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack direction='row' spacing={2} sx={{ padding: 2 }}>
              <TextField
                variant='outlined'
                fullWidth
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder='Ask me something...'
                disabled={isPending}
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isPending || !question.trim()}
              >
                Send
              </Button>
            </Stack>
          </form>
        </DialogActions>
      </Dialog>
    </>
  )
}
