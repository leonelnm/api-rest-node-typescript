import { Router } from 'express'
import { createUserHandler } from '../../controllers/user.controller'

const userRouter = Router()

userRouter.post('/', (req, res) => {
  const data = req.body
  const response = createUserHandler({ data })

  return res.send(response)
})

export default userRouter
