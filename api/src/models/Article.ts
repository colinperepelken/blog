import { IArticleDetails, ITag } from '@blog/shared-types'
import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    Optional,
    CreationOptional,
    NonAttribute,
} from 'sequelize'
import { DatabaseConnection } from '../db/DatabaseConnection'
import { Tag } from './Tag'

/*
 * Everywhere else we use IArticleDetails which defines the timestamps as being numbers, but the Sequelize
 */
export interface IArticle
    extends Omit<IArticleDetails, 'createdAt' | 'updatedAt' | 'id'> {
    createdAt: Date
    updatedAt: Date | null
}

export class Article
    extends Model<InferAttributes<Article>, InferCreationAttributes<Article>>
    implements IArticle
{
    declare id: CreationOptional<number>
    declare title: string
    declare imageUrl: string
    declare content: string
    declare author: string
    declare createdAt: Date
    declare updatedAt: Date | null

    declare tags?: NonAttribute<Tag[]>
}

Article.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageUrl: DataTypes.STRING,
        content: DataTypes.STRING,
        author: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize: DatabaseConnection.sequelize,
        timestamps: true,
    },
)
