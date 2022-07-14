import { User } from '../models/user.model'
import { createUser } from '../services/user.service'

export const createUserHandler = async ({ data = {} }): Promise<User> => {
  console.log({ data })
  const newUser = new User(data)

  return await createUser(newUser)
}
