import { IArticleDetails } from '@blog/shared-types'
import { Link } from 'react-router-dom'
import ArticleForm from '../form/ArticleForm'

interface IProps {
    articleId: string
}

const exampleArticle: IArticleDetails = {
    id: 1,
    title: 'First blog post',
    imageUrl: '#',
    content: 'content',
    author: 'Colin',
    createdAt: 123,
    updatedAt: 123,
}

const EditPost = (props: IProps) => {
    // TODO make call to API with postId and get post details

    return (
        <div>
            <Link to="/">Back</Link>
            <div>
                <article>
                    <ArticleForm article={exampleArticle} />
                </article>
            </div>
        </div>
    )
}

export default EditPost
