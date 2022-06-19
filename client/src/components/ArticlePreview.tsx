import { IArticleDetails } from '@blog/shared-types'
import { useHistory } from 'react-router-dom'
import { AuthenticationProvider } from '../features/authentication/AuthenticationProvider'
import { DateTimeFormatter } from '../features/DateTimeFormatter'
import { IButtonProps } from './shared/Button'
import { Card } from './shared/Card'

interface IProps {
    article: IArticleDetails
}

const ArticlePreview = (props: IProps) => {
    const history = useHistory()

    const [x, y] = getNewPosition()
    return (
        <div
            className="absolute bg-slate-800 w-16 h-16 rounded-full opacity-80 hover:opacity-90 shadow-lg hover:shadow-2xl cursor-pointer"
            style={{ left: x, top: y }}
        ></div>
        // <Card
        //     title={props.article.title}
        //     onClick={() => history.push(`/article/${props.article.id}/view`)}
        //     buttons={getAvailableButtons(props.article)}
        //     content={getContent(props.article)}
        // ></Card>
    )
}

const getContent = (article: IArticleDetails) => (
    <div>
        <p>
            Posted on {article.createdAt} by {article.author}
        </p>
    </div>
)

const getAvailableButtons = (article: IArticleDetails): IButtonProps[] => {
    const history = useHistory()
    const buttons = [
        {
            title: 'View',
            onClick: () => history.push(`/article/${article.id}/view`),
        },
    ]

    if (AuthenticationProvider.isAdmin()) {
        buttons.push({
            title: 'Edit',
            onClick: () => history.push(`/article/${article.id}/edit`),
        })
    }

    return buttons
}

const getNewPosition = () => {
    return [
        Math.floor(Math.random() * (window.innerWidth - 16)),
        Math.floor(Math.random() * (window.innerHeight - 16)),
    ]
}

export default ArticlePreview
