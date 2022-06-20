import { IArticleDetails } from '@blog/shared-types'
import { useHistory } from 'react-router-dom'
import { AuthenticationProvider } from '../features/authentication/AuthenticationProvider'
import { DateTimeFormatter } from '../features/DateTimeFormatter'
import Button, { IButtonProps } from './shared/Button'
import { Card } from './shared/Card'
import { useState, useEffect } from 'react'
import moment from 'moment'

interface IProps {
    article: IArticleDetails
}

const ArticlePreview = (props: IProps) => {
    const history = useHistory()
    const [showHoverBox, setShowHoverBox] = useState(false)
    const [[x, y], setPosition] = useState(getNewPosition())
    if (showHoverBox) {
        return (
            <div
                className="bg-green-900 absolute w-48 h-48 p-1 rounded-full text-slate-800 text-center flex items-center z-10"
                style={{ left: x, top: y }}
            >
                <div>
                    <h2 className="text-lg font-semibold">
                        {props.article.title}
                    </h2>
                    <p>
                        Posted on{' '}
                        {moment
                            .unix(props.article.createdAt)
                            .format('MMMM Do, YYYY')}{' '}
                        by {props.article.author}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
                        onClick={() => setShowHoverBox(false)}
                    >
                        X
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div
            className="absolute bg-green-900 w-16 h-16 rounded-full opacity-80 hover:opacity-90 shadow-lg hover:shadow-2xl cursor-pointer border-2 border-slate-700 hover:border-slate-900 hover:border-2 z-40"
            style={{ left: x, top: y }}
            onClick={() => setShowHoverBox(true)}
        ></div>
    )

    // <Card
    //     title={props.article.title}
    //     onClick={() => history.push(`/article/${props.article.id}/view`)}
    //     buttons={getAvailableButtons(props.article)}
    //     content={getContent(props.article)}
    // ></Card>
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

const getNewPosition = (): [number, number] => {
    return [
        Math.floor(Math.random() * (window.innerWidth - 16)),
        Math.floor(Math.random() * (window.innerHeight - 16)),
    ]
}

export default ArticlePreview
