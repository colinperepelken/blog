import { Link } from 'react-router-dom'
import PostForm from '../form/PostForm'
import { IPostDetails } from '../../types/PostTypes'

interface IProps {
    postId: string
}

const examplePost: IPostDetails = {
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
                    <PostForm post={examplePost} />
                </article>
            </div>
        </div>
    )
}

export default EditPost
