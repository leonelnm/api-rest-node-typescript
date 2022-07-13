import express from 'express'
import compression from 'compression'
import cors from 'cors'

import authLimiter from './middlewares/rateLimiter'
import notFoundError from './middlewares/notFoundError'
import handleError from './middlewares/handleError'

import config from './config/config'
import morganMiddleware from './config/morgan'

// All Routes v1
import router from './routes/v1'

// Iniciar configuración del server
const app = express()

app.use(morganMiddleware)

app.disable('x-powered-by')

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// sanitize request data

// gzip compression
app.use(compression())

// enable cors
app.use(cors())

// limit repeated failed requests to auth endpoints
if (config.env === 'PROD') {
  app.use('/v1/auth', authLimiter)
}

// v1 api routes
app.use('/api/v1', router)

// send back a 404 error for any unknown api request
app.use(notFoundError)

// handle error
app.use(handleError)

export default app
