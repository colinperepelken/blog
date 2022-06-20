import { Router } from "express"
import { ArticleController } from "../controllers/ArticleController"
import { IArticleDetails } from '@blog/shared-types'
import { IArticle } from "../models/Article"

const articleRouter = Router()
    .get('/:id', async (request, response) => {
        const article = await ArticleController.get(parseInt(request.params.id))
        response.json(article)
    })

    .get('/', async (request, response, next) => {
        try {
            const articles = await ArticleController.list()
            response.json(articles)
        } catch (error) {
            next(error)
        }

    })

    .post('/', (request, response) => {
        ArticleController.create(request.body as IArticle)
        response.sendStatus(201)
    })

export { articleRouter }