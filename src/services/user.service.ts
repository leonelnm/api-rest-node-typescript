import { AppDataSource } from '../models/datasource'
import { User } from '../models/user.model'

const userRepository = AppDataSource.getRepository(User)

export const createUser = async (user: User): Promise<User> => {
  return await userRepository.save(userRepository.create(user))
}
