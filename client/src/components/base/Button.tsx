interface IProps {
    title: string
    onClick?: () => void
}

const Button = (props: IProps) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            {props.title}
        </button>
    )
}

export default Button
