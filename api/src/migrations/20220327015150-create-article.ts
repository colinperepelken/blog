import { DataTypes, QueryInterface } from "sequelize";
import { Sequelize } from 'sequelize';
import { Article } from '../models/Article';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  return queryInterface.createTable(Article.tableName, Article.getAttributes(), Article.options)
}

export const down = async () => {
  throw Error('Down migration not implemented')
}
