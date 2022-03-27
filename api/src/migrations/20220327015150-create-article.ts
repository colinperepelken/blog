import { DataTypes, QueryInterface } from "sequelize";
import { Sequelize } from 'sequelize';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  return queryInterface.createTable('article', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })
}

export const down = async () => {
  throw Error('Down migration not implemented')
}
