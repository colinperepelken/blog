import Button, { IButtonProps } from './Button'
interface IProps {
    content: JSX.Element | string
    title?: string
    buttons?: IButtonProps[]
    onClick?: () => void
}

const Card = (props: IProps) => (
    <div>
        <div onClick={props.onClick}>{props.title}</div>
        <div>{props.content}</div>
        {renderButtons(props.buttons)}
    </div>
)

const renderButtons = (buttons?: IButtonProps[]) => {
    buttons?.map((buttonProps, index) => (
        <Button key={index} {...buttonProps}></Button>
    ))
}

export default Card
