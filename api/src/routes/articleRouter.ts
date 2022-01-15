import { Router } from "express"
import { ArticleController } from "../controllers/ArticleController"
import { IArticleDetails } from '@blog/shared-types'

const articleRouter = Router()
    .get('/:id', (req, res) => {
        const article = ArticleController.get(req.params.id)
        res.json(article)
    })

    .post('/', (req, res) => {
        ArticleController.create(req.body as IArticleDetails)
    })

export { articleRouter }