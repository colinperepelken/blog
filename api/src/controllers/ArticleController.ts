import { IArticleDetails } from "@blog/shared-types";
import { Article } from "../models/Article";
import { AbstractController } from './AbstractController';
import { Tag } from '../models/Tag';

export class ArticleController extends AbstractController<Article> {
    public static async get(id: number) {
        return this.findArticleById(id)
    }

    public static async list(): Promise<Article[]> {
        return Article.findAll({include: [{model: Tag, required: false, as: 'tags'}]})
    }

    public static async update(id: number, values: Partial<IArticleDetails>) {
        const article = await this.findArticleById(id)
        return article.update(values)
    }

    public static create(values: IArticleDetails) {
        return Article.create(values)
    }

    public static async delete(id: number) {
        const article = await this.findArticleById(id)
        return article.destroy()
    }
    

    private static async findArticleById(id: number): Promise<Article> {
        const article = await Article.findByPk(id, {include: [{model: Tag, required: false, as: 'tags'}]})
        if (! article) {
            throw new Error('Article not found')
        }

        return article
    }
}