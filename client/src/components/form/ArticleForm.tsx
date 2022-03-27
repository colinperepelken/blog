import { Editor } from '@tinymce/tinymce-react'
import { IArticleDetails } from '@blog/shared-types'

interface IProps {
    article: IArticleDetails
}

const ArticleForm = (props: IProps) => {
    return (
        <form>
            <label>
                {props.article.title}
                <input type="text" value="Post title" />
            </label>
            <Editor></Editor>
        </form>
    )
}

export default ArticleForm
