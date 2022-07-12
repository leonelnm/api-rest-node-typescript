import { Request, Response, NextFunction } from 'express'
import Logger from '../config/logger'

export default (req: Request, res: Response, _next: NextFunction): void => {
  Logger.warn(`Intentado acceder a ${req.path}`)

  res.status(404).send({ msg: 'Not found!' }).end()
}
