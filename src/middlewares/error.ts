import config from '../config/config'

import { Request, Response, NextFunction } from 'express'

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  const statusCode = 500
  let { message } = err
  if (config.env === 'PROD') {
    message = 'Internal Server Error'
  }

  res.locals.errorMessage = err.message

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'DEV' && { stack: err.stack })
  }

  if (config.env === 'DEV') {
    // logger.error(err)
    console.log(err)
  }

  res.status(statusCode).send(response)
}
