import 'reflect-metadata'
import { DataSource } from 'typeorm'

import config from '../../config/config'
import { User } from '../user.model'

export const AppDataSource = new DataSource({
  ...config.dbConnection,
  entities: [User],
  synchronize: true
})
