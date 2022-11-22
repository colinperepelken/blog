import BorderedDiv from './BorderedDiv'
import { IButtonProps } from './Button'
import { CardImage } from './CardImage'

interface IProps {
    content: JSX.Element | string
    title?: string
    buttons?: IButtonProps[]
    onClick?: () => void
}

export const StructuredCard = (props: IProps) => (
    <BorderedDiv
        onClick={props.onClick}
        className="block hover:cursor-pointer flex-shrink-0"
    >
        <div className="flex items-center">
            <div className="inline-block">
                <CardImage />
            </div>
            <div className="ml-4">
                <h2
                    className="mb-2 font-normal hover:cursor-pointer"
                    onClick={props.onClick}
                >
                    {props.title}
                </h2>
                <div className="block font-extralight">{props.content}</div>
            </div>
        </div>
    </BorderedDiv>
)
