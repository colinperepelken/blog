export interface IButtonProps {
    title: string
    onClick?: () => void
    primary?: boolean
}

const Button = (props: IButtonProps) => (
    <button
        className="bg-primary-500 hover:bg-primary-700 text-white py-2 px-4 m-1"
        onClick={props.onClick}
    >
        {props.title}
    </button>
)

export default Button
