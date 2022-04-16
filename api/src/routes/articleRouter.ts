import { Router } from "express"
import { ArticleController } from "../controllers/ArticleController"
import { IArticleDetails } from '@blog/shared-types'

const articleRouter = Router()
    .get('/:id', async (request, response) => {
        const article = await ArticleController.get(request.params.id)
        response.json(article)
    })

    .get('/', async (request, response) => {
        const articles = await ArticleController.list()
        response.json(articles)
    })

    .post('/', (request, response) => {
        ArticleController.create(request.body as IArticleDetails)
        response.sendStatus(201)
    })

export { articleRouter }