interface IProps {
    content: JSX.Element | string
}

const Card = (props: IProps) => (
    <div className="border p-2">{props.content}</div>
)

export default Card
