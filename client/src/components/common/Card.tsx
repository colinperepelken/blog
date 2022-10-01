import { IButtonProps } from './Button'
import { CardImage } from './CardImage'

interface IProps {
    content: JSX.Element | string
    title?: string
    buttons?: IButtonProps[]
    onClick?: () => void
}

export const Card = (props: IProps) => (
    <div
        onClick={props.onClick}
        className="block p-6 rounded bg-black border border-violet-900 hover:border-violet-400  text-gray-300 hover:cursor-pointer flex-shrink-0"
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
    </div>
)
