import { IArticleDetails } from "@blog/shared-types";
import { Article } from "../models/Article";

export class ArticleController {
    public static async get(id: string) {
        return Article.findByPk(id)
    }

    public static async list() {
        return Article.findAll()
    }

    public static update(id: string) {

    }

    public static create(article: IArticleDetails) {

    }

    public static delete(id: string) {

    }
}