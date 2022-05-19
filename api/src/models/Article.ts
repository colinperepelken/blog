import { IArticleDetails, ITag } from "@blog/shared-types";
import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";
import { DatabaseConnection } from '../db/DatabaseConnection';

export class Article extends Model<InferAttributes<Article>, InferCreationAttributes<Article>> implements IArticleDetails {
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
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize: DatabaseConnection.sequelize,
    timestamps: true
})

