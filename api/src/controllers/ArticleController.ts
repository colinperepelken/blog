import { IArticleDetails } from "@blog/shared-types";

export class ArticleController {
    public static get(id: string) {
        const exampleArticle = {
            id,
            title: 'Test title',
            description: 'This is my first blog post'
        }
        return exampleArticle
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