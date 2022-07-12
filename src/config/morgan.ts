import morgan from 'morgan'
import { Request, Response } from 'express'
import config from './config'
import Logger from './logger'

morgan.token('message', (_req: Request, res: Response) => res.locals.errorMessage != null ? res.locals.errorMessage : '')

const getIpFormat = (): string => (config.env === 'production' ? ':remote-addr - ' : '')
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`

export const successHandler = morgan(successResponseFormat, {
  skip: (_req: Request, res: Response) => res.statusCode >= 400,
  stream: { write: (message) => Logger.info(message.trim()) }
})

export const errorHandler = morgan(errorResponseFormat, {
  skip: (_req: Request, res: Response) => res.statusCode < 400,
  stream: { write: (message) => Logger.error(message.trim()) }
})
