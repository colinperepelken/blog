const BorderedDiv = (
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
) => (
    <div
        {...props}
        className={`border-2 border-primary-800 hover:border-primary-400 rounded p-4 ${props.className}`}
    >
        {props.children}
    </div>
)

export default BorderedDiv
