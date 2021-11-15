import { Editor } from '@tinymce/tinymce-react'
import { IPostDetails } from '../../types/PostTypes'

interface IProps {
    post: IPostDetails
}

const PostForm = (props: IProps) => {
    return (
        <form>
            <label>
                Post title
                <input type="text" value="Post title" />
            </label>
            <Editor></Editor>
        </form>
    )
}

export default PostForm
