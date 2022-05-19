import { App } from './app'
import { DatabaseConnection } from './db/DatabaseConnection'
import { DatabaseInitializer } from './db/DatabaseInitializer'

const PORT = process.env.PORT || 3001
const app = new App()

DatabaseConnection.testConnection()
DatabaseInitializer.init()

app.express.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
