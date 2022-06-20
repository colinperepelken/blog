import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
import { Logger } from "../logging/Logger"

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
            Logger.success('Database connection successful!')
        } catch (error) {
            Logger.error('Unable to connect to the database:')
            if (error instanceof Error) {
                Logger.error(error.message)
            }
            process.exit(1)
        }
    }
}

export const DatabaseConnection = new DatabaseConnectionClass()