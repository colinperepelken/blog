import { Router } from 'express'
import { articleRouter } from './articleRouter'
import { tagRouter } from './tagRouter'

const apiRouter = Router().use('/article', articleRouter).use('/tag', tagRouter)

export { apiRouter }
