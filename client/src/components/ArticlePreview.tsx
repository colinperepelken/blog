import { IArticleDetails } from '@blog/shared-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AuthenticationProvider } from '../features/authentication/AuthenticationProvider'
import { DateTimeFormatter } from '../features/DateTimeFormatter'
import { IButtonProps } from './shared/Button'
import Card from './shared/Card'

interface IProps {
    article: IArticleDetails
}

const DatePosted = styled.p`
    font-style: italic;
    font-weight: lighter;
`

const ArticlePreview = (props: IProps) => {
    const history = useHistory()

    return (
        <Card
            title={props.article.title}
            onClick={() => history.push(`/article/${props.article.id}/view`)}
            buttons={getAvailableButtons(props.article)}
            content={getContent(props.article)}
        ></Card>
    )
}

const getContent = (Article: IArticleDetails) => (
    <div>
        <DatePosted>
            Posted {DateTimeFormatter.secondsToDate(Article.createdAt)}
        </DatePosted>
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

export default ArticlePreview
