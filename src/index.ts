import express from 'express'
import dotenv from 'dotenv'

// routes
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

dotenv.config()
const PORT = process.env.PORT !== undefined ? process.env.PORT : '3001'

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

// Add routes
app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
