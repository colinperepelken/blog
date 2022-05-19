import { Tag } from '../models/Tag'
import { AbstractController } from './AbstractController'

export class TagController extends AbstractController<Tag> {
    public static async list(): Promise<Tag[]> {
        return Tag.findAll()
    }
}