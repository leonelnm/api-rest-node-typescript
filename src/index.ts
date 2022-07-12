import express from 'express'
import dotenv from 'dotenv'
import * as Sentry from '@sentry/node'

// routes
import diaryRouter from './routes/diaries'
import notFound from './middlewares/notFound'
import handleError from './middlewares/handleError'
import initSentry from './config/sentry'
import path from 'path'

const app = express()
app.use(express.json())

initSentry(app)
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler())
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler())

dotenv.config()
const PORT = process.env.PORT !== undefined ? process.env.PORT : '3001'

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use('/static', express.static(path.resolve(__dirname, '../static')))

// Add routes
app.use('/api/diaries', diaryRouter)

// 404
app.use(notFound)

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler())
// 500
app.use(handleError)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
