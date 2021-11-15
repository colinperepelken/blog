import { IPostPreview } from '../types/PostTypes'
import PostPreview from './PostPreview'

const examplePost: IPostPreview = {
    id: 1,
    title: 'First blog post',
    previewText: 'Preview text for this blog post',
    imageUrl: '#',
    createdAt: 123,
}

const PostList = () => {
    // TODO fetch lists of posts for this page
    // TODO add pagination eventually
    return (
        <ul>
            <li>
                <PostPreview post={examplePost}></PostPreview>
            </li>
        </ul>
    )
}

export default PostList
