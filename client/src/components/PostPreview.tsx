import { Link } from 'react-router-dom'
import { IPostPreview } from '../types/PostTypes'

interface IProps {
    post: IPostPreview
}

const PostPreview = (props: IProps) => {
    return (
        <div>
            <h2>
                <Link to={`/post/${props.post.id}/view`}>
                    {props.post.title}
                </Link>
            </h2>
            <p>{props.post.previewText}</p>
            <p>Posted {props.post.createdAt}</p>
            <p>
                <Link to={`/post/${props.post.id}/edit`}>Edit</Link>
            </p>
        </div>
    )
}

export default PostPreview
