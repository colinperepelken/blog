export interface IButtonProps {
    title: string
    onClick?: () => void
}

const Button = (props: IButtonProps) => {
    return <button>{props.title}</button>
}

export default Button
