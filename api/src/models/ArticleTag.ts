import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    ForeignKey,
} from 'sequelize'
import { DatabaseConnection } from '../db/DatabaseConnection'
import { Tag } from './Tag'
import { Article } from './Article'

interface IArticleTag {
    articleId: number
    tagId: number
}

export class ArticleTag
    extends Model<
        InferAttributes<ArticleTag>,
        InferCreationAttributes<ArticleTag>
    >
    implements IArticleTag
{
    declare id: number
    declare articleId: ForeignKey<Article['id']>
    declare tagId: ForeignKey<Tag['id']>
}

ArticleTag.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        articleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Article,
                key: 'id',
            },
        },
        tagId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Tag,
                key: 'id',
            },
        },
    },
    {
        sequelize: DatabaseConnection.sequelize,
        timestamps: false,
    },
)
