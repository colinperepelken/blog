export interface IArticleDetails {
    id: number
    title: string
    imageUrl: string
    content: string
    author: string
    createdAt: number
    updatedAt: number
}
export type IArticlePreview = Pick<
IArticleDetails,
    'id' | 'title' | 'imageUrl' | 'createdAt'
> & {
    previewText: string
}

export type IArticlePostRequest = Omit<IArticleDetails, 'id'>

export type IArticlePatchRequest = Partial<IArticleDetails>
