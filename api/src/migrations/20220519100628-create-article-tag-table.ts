
import { Sequelize, QueryInterface } from 'sequelize';
import { ArticleTag } from '../models/ArticleTag';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable(ArticleTag.tableName, ArticleTag.getAttributes(), ArticleTag.options)
}

export const down = async () => {
    throw Error('Down migration not implemented')
}

