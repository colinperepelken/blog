import { App } from './app'
import { DatabaseConnection } from './db/DatabaseConnection'

const PORT = process.env.PORT || 3001
const app = new App()

DatabaseConnection.testConnection()

app.express.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
