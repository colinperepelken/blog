import { Sequelize, QueryInterface } from 'sequelize'
import { Tag } from '../models/Tag'

export const up = async (
    queryInterface: QueryInterface,
    Sequelize: Sequelize,
) => {
    return queryInterface.createTable(
        Tag.tableName,
        Tag.getAttributes(),
        Tag.options,
    )
}

export const down = async () => {
    throw Error('Down migration not implemented')
}
