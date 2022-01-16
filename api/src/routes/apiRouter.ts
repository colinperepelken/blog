import { Router } from "express"
import { articleRouter } from "./articleRouter"

const apiRouter = Router()
    .use('/articles', articleRouter)

export { apiRouter }