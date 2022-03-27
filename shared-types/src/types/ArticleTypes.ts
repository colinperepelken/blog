export interface IArticleDetails {
    id: number
    title: string
    imageUrl: string
    content: string
    author: string
    createdAt: number
    updatedAt: number
}

export type IArticlePostRequest = Omit<IArticleDetails, 'id'>

export type IArticlePatchRequest = Partial<IArticleDetails>