import Button, { IButtonProps } from './Button'

interface IProps {
    content: JSX.Element | string
    title?: string
    buttons?: IButtonProps[]
    onClick?: () => void
}

export const Card = (props: IProps) => (
    <div>
        <h2 onClick={props.onClick}>{props.title}</h2>
        <div>{props.content}</div>
        {renderButtons(props.buttons)}
    </div>
)

const renderButtons = (buttons?: IButtonProps[]) => {
    return buttons?.map((buttonProps, index) => (
        <Button key={index} {...buttonProps}></Button>
    ))
}
