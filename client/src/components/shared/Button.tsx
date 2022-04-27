export interface IButtonProps {
    title: string
    onClick?: () => void
    primary?: boolean
    className?: string
}

const Button = (props: IButtonProps) => (
    <button onClick={props.onClick} className={props.className}>
        {props.title}
    </button>
)

export default Button
