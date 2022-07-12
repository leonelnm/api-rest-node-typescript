import { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, _next: NextFunction): void => {
  console.log(`Intentado acceder a ${req.path}`)

  res.status(404).send({ msg: 'Not found!' }).end()
}
