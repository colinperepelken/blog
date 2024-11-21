const BorderedDiv = (
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
) => (
    <div
        {...props}
        className={`border-2 border-secondary-300 p-4 ${props.className}`}
    >
        {props.children}
    </div>
)

export default BorderedDiv
