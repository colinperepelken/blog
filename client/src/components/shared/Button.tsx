export interface IButtonProps {
    title: string
    onClick?: () => void
    primary?: boolean
}

const Button = (props: IButtonProps) => (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
        onClick={props.onClick}
    >
        {props.title}
    </button>
)

export default Button
