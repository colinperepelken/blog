import { App } from './app'
import { DatabaseConnection } from './db/DatabaseConnection'
import { DatabaseInitializer } from './db/DatabaseInitializer'
import { Logger } from './logging/Logger';

const PORT = process.env.PORT || 3001
const app = new App()

DatabaseConnection.testConnection()
DatabaseInitializer.init()

app.express.listen(PORT, () => {
    Logger.info(`Listening on port ${PORT}`)
})
