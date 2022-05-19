
import { Sequelize, QueryInterface } from 'sequelize';
import { Tag } from '../models/Tag';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.bulkInsert(Tag.tableName, [
        {name: 'Basically Just Pizza'},
        {name: 'Bicycling'},
        {name: 'Goose'},
        {name: 'Travel'},
        {name: 'Technology'}
    ])
}

export const down = async () => {
    throw Error('Down seeder not implemented')
}

