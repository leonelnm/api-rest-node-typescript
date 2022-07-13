import winston from 'winston'
import config from './config'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
}

const level = (): string => {
  const env = config.env
  const isDevelopment = env === 'DEV'
  return isDevelopment ? 'debug' : 'warn'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
)

const formatWithoutColor = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
)

const transports = [
  new winston.transports.Console({
    format: format
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: formatWithoutColor
  }),
  new winston.transports.File({
    filename: 'logs/all.log',
    format: formatWithoutColor
  })
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  transports
})

export default Logger
