import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

export class DatabaseConnectionClass {
    public sequelize: Sequelize

    constructor() {
        dotenv.config()
        this.sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || 'root', process.env.DB_PASS || '', {
            host: process.env.DB_HOST,
            dialect: 'postgres',
        })
    }

    public async testConnection() {
        try {
            await this.sequelize.authenticate()
            console.log('Database connection successful!')
        } catch (error) {
            console.log('Unable to connect to the database:')
            if (error instanceof Error) {
                console.log(error.message)
            }
            process.exit(1)
        }
    }
}

export const DatabaseConnection = new DatabaseConnectionClass()