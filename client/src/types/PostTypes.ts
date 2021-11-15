export interface IPostDetails {
    id: number
    title: string
    imageUrl: string
    content: string
    author: string
    createdAt: number
    updatedAt: number
}
export type IPostPreview = Pick<
    IPostDetails,
    'id' | 'title' | 'imageUrl' | 'createdAt'
> & {
    previewText: string
}
