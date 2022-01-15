import { IArticlePreview } from '@blog/shared-types'
import ArticlePreview from './ArticlePreview'

const examplePost: IArticlePreview = {
    id: 1,
    title: 'First blog post',
    previewText: 'Preview text for this blog post',
    imageUrl: '#',
    createdAt: 1637032829,
}

const ArticleList = () => {
    // TODO fetch lists of posts for this page
    // TODO add pagination eventually
    return (
        <div>
            <ArticlePreview article={examplePost} />
        </div>
    )
}

export default ArticleList
