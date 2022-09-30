import { Router } from 'express'
import { TagController } from '../controllers/TagController'

const tagRouter = Router().get('/', async (request, response) => {
    const tags = await TagController.list()
    response.json(tags)
})

export { tagRouter }
