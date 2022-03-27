import { IArticleDetails } from "@blog/shared-types";
import { Article } from "../models/Article";

export class ArticleController {
    public static async get(id: string) {
        return Article.findByPk(id)
    }

    public static list() {
        const exampleArticle = {
            id: 'test123',
            title: 'Test title',
            description: 'This is my first blog post'
        }
        return [exampleArticle]  
    }

    public static update(id: string) {

    }

    public static create(article: IArticleDetails) {

    }

    public static delete(id: string) {

    }
}