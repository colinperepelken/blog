import { IArticleDetails } from '@blog/shared-types'
import { useHistory } from 'react-router-dom'
import { AuthenticationProvider } from '../features/authentication/AuthenticationProvider'
import { IButtonProps } from './shared/Button'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { Card } from './shared/Card'

interface IProps {
    article: IArticleDetails
}

const ArticlePreview = (props: IProps) => {
    const history = useHistory()

    return (
        <div className="my-2">
            <Card
                title={props.article.title}
                onClick={() =>
                    history.push(`/article/${props.article.id}/view`)
                }
                buttons={getAvailableButtons(props.article)}
                content={getContent(props.article)}
            ></Card>
        </div>
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

export default ArticlePreview
