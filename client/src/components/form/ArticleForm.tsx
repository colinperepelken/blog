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
            {/* TODO, there is an issue with Editor when using yarn. If npm install is used it works fine */}
            {/* <Editor></Editor> */}
        </form>
    )
}

export default ArticleForm
