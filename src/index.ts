import 'reflect-metadata'

import app from './app'
import config from './config/config'
import Logger from './config/logger'
import { AppDataSource } from './models/datasource'

AppDataSource.initialize()
  .then(() => {
    Logger.info('Connection db: OK')
  })
  .catch((error) => {
    Logger.error('Connection db: FAIL', error)
  })

const port = config.port
app.listen(port, () => {
  Logger.info(`Server running on port: ${port}`)
})
