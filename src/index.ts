import 'reflect-metadata'

import app from './app'
import config from './config/config'
import Logger from './config/logger'

const port = config.port

app.listen(port, () => {
  Logger.info(`Server running on port ${port}...`)
})
