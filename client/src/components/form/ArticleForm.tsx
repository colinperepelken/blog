import { Editor } from '@tinymce/tinymce-react'
import { IArticleDetails } from '@api/types/ArticleTypes'

interface IProps {
    article: IArticleDetails
}

const ArticleForm = (props: IProps) => {
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

export default ArticleForm
