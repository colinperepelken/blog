const Link = (
    props: React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >,
) => (
    <a className="text-secondary-500" target="_blank" {...props}>
        {props.children}
    </a>
)

export default Link
