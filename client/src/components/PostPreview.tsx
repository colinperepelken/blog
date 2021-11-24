import { useHistory } from 'react-router-dom'
import { DateTimeFormatter } from '../features/DateTimeFormatter'
import { IPostPreview } from '../types/PostTypes'
import { IButtonProps } from './base/Button'
import Card from './base/Card'

interface IProps {
    post: IPostPreview
}

const PostPreview = (props: IProps) => {
    const history = useHistory()

    return (
        <Card
            title={props.post.title}
            onClick={() => history.push(`/post/${props.post.id}/view`)}
            buttons={getButtons(props.post)}
            content={getContent(props.post)}
        ></Card>
    )
}

const getContent = (post: IPostPreview) => (
    <div>
        <p>{post.previewText}</p>
        <p>Posted {DateTimeFormatter.secondsToDate(post.createdAt)}</p>
    </div>
)

const getButtons = (post: IPostPreview): IButtonProps[] => {
    const history = useHistory()

    return [
        {
            title: 'Edit',
            onClick: () => history.push(`/post/${post.id}/view`),
        },
    ]
}

export default PostPreview
