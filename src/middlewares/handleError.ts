import { Request, Response, NextFunction } from 'express'

export default (error: unknown, _req: Request, res: Response, _next: NextFunction): void => {
  console.log('mi error!:::', error)

  if (error instanceof Error) {
    console.log('Is error instance')
    console.log('Name', error.name)
    console.log('Message', error.name)
    console.log('StackTrace', error.stack)
  }

  if (error instanceof Error && error.name === 'CastError') {
    res.status(400).send({
      error: 'my error!!!!'
    })
  } else {
    res.status(500).send({ error: 'Error inesperado, contacte con el admin!' })
  }
}
