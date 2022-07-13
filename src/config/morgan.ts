import morgan, { StreamOptions } from 'morgan'
import config from './config'
import Logger from './logger'

const stream: StreamOptions = {
  write: (message) => Logger.http(message)
}

const skip = (): boolean => {
  const env = config.env
  return env !== 'DEV'
}

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
)

export default morganMiddleware
