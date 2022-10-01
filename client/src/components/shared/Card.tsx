import Button, { IButtonProps } from './Button'

interface IProps {
    content: JSX.Element | string
    title?: string
    buttons?: IButtonProps[]
    onClick?: () => void
}

export const Card = (props: IProps) => (
    <div className="block p-6 rounded bg-black border border-violet-400 font-light text-gray-300">
        <h2
            className="mb-2 font-medium hover:cursor-pointer"
            onClick={props.onClick}
        >
            {props.title}
        </h2>
        <div>{props.content}</div>
        {renderButtons(props.buttons)}
    </div>
)

const renderButtons = (buttons?: IButtonProps[]) => {
    return buttons?.map((buttonProps, index) => (
        <Button key={index} {...buttonProps}></Button>
    ))
}
