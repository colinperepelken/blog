import { IArticleDetails } from '@blog/shared-types'
import { useHistory } from 'react-router-dom'
import { DateTimeFormatter } from 'src/features/DateTimeFormatter'
import { Card } from './common/Card'

interface IProps {
    article: IArticleDetails
}

const ArticlePreview = (props: IProps) => {
    const history = useHistory()

    return (
        <div className="my-10">
            <Card
                title={props.article.title}
                onClick={() =>
                    history.push(`/article/${props.article.id}/view`)
                }
                content={getContent(props.article)}
            ></Card>
        </div>
    )
}

const getContent = (article: IArticleDetails) => (
    <div>
        <p>
            Posted on {DateTimeFormatter.secondsToDate(article.createdAt)} by{' '}
            {article.author}
        </p>
    </div>
)

export default ArticlePreview
