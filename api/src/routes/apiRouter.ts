import { Router } from "express"
import { articleRouter } from "./articleRouter"

const apiRouter = Router()
    .use('/article', articleRouter)

export { apiRouter }