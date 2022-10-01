export interface IButtonProps {
    title: string
    onClick?: () => void
    primary?: boolean
}

const Button = (props: IButtonProps) => (
    <button
        className="bg-violet-500 hover:bg-violet-700 text-white  py-2 px-4 rounded m-1"
        onClick={props.onClick}
    >
        {props.title}
    </button>
)

export default Button
