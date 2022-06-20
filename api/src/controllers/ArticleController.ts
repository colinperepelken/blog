import { IArticleDetails, IArticleResponse } from "@blog/shared-types";
import { Article, IArticle } from "../models/Article";
import { AbstractController } from './AbstractController';
import { Tag } from '../models/Tag';
import { TimestampConverter } from '../db/TimestampConverter';

export class ArticleController extends AbstractController<Article> {
    public static async get(id: number) {
        return this.findArticleById(id)
    }

    public static async list(): Promise<IArticleResponse[]> {
        const articles = await Article.findAll({include: [{model: Tag, required: false, as: 'tags'}]})
        return articles.map((article) => this.formatResponse(article))
    }

    public static async update(id: number, values: Partial<IArticle>) {
        const article = await this.findArticleById(id)
        return this.formatResponse(await article.update(values))
    }

    public static async create(values: IArticle): Promise<IArticleResponse>  {
        return this.formatResponse(await Article.create(values))
    }

    public static async delete(id: number) {
        const article = await this.findArticleById(id)
        return article.destroy()
    }
    

    private static async findArticleById(id: number): Promise<Article> {
        const article = await Article.findByPk(id, {include: [{model: Tag, required: false, as: 'tags', attributes: ['name']}]})
        if (! article) {
            throw new Error('Article not found')
        }
        return article
    }

    private static formatResponse(article: Article): IArticleResponse {
        return {
            ...article.get({plain: true}),
            ...TimestampConverter.convertTimestampsToSecondsSinceEpoch(article), // Convert article timestamps from Dates to seconds since unix epoch
            tags: article.tags ?? [] // Ensure that article.tags is always set
        }
    }
}