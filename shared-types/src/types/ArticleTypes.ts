import { ITag } from "./TagTypes"

export interface IArticleDetails {
    id: number
    title: string
    imageUrl: string
    content: string
    author: string
    createdAt: number
    updatedAt: number | null
}

export type IArticlePostRequest = Omit<IArticleDetails, 'id'>

export type IArticlePatchRequest = Partial<IArticleDetails>

export interface IArticleResponse extends IArticleDetails {
    tags: ITag[]
}