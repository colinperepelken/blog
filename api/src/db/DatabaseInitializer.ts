import { Article } from '../models/Article'
import { ArticleTag } from '../models/ArticleTag'
import { Tag } from '../models/Tag'

export class DatabaseInitializer {
    public static init() {
        Tag.belongsToMany(Article, {
            through: ArticleTag,
            foreignKey: 'tagId',
            as: 'articles',
        })
        Article.belongsToMany(Tag, {
            through: ArticleTag,
            foreignKey: 'articleId',
            as: 'tags',
        })
    }
}
