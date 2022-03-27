import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize/types";
import { DatabaseConnection } from '../db/DatabaseConnection';

export class Article extends Model<InferAttributes<Article>, InferCreationAttributes<Article>> {
    declare id: number
    declare title: string
    declare imageUrl: string
    declare content: string
    declare author: string
    declare createdAt: number
    declare updatedAt: number
}

Article.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize: DatabaseConnection.sequelize
})