import dotenv from "dotenv"

import { App } from './app'
import { DatabaseConnection } from './db/DatabaseConnection';

dotenv.config()

const PORT = process.env.PORT || 3001
const app = new App()

const database = new DatabaseConnection()
database.testConnection()

app.express.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
