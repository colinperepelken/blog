import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AuthenticationProvider } from '../features/authentication/AuthenticationProvider'
import { DateTimeFormatter } from '../features/DateTimeFormatter'
import { IPostPreview } from '../types/PostTypes'
import { IButtonProps } from './shared/Button'
import Card from './shared/Card'

interface IProps {
    post: IPostPreview
}

const DatePosted = styled.p`
    font-style: italic;
    font-weight: lighter;
`

const PostPreview = (props: IProps) => {
    const history = useHistory()

    return (
        <Card
            title={props.post.title}
            onClick={() => history.push(`/post/${props.post.id}/view`)}
            buttons={getAvailableButtons(props.post)}
            content={getContent(props.post)}
        ></Card>
    )
}

const getContent = (post: IPostPreview) => (
    <div>
        <p>{post.previewText}</p>
        <DatePosted>
            Posted {DateTimeFormatter.secondsToDate(post.createdAt)}
        </DatePosted>
    </div>
)

const getAvailableButtons = (post: IPostPreview): IButtonProps[] => {
    const history = useHistory()
    const buttons = [
        {
            title: 'View',
            onClick: () => history.push(`/post/${post.id}/view`),
        },
    ]

    if (AuthenticationProvider.isAdmin()) {
        buttons.push({
            title: 'Edit',
            onClick: () => history.push(`/post/${post.id}/edit`),
        })
    }

    return buttons
}

export default PostPreview
