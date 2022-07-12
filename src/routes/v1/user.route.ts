import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', (_req, res) => {
  res.send('Hello')
})

export default userRouter
