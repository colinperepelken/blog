import { Link, LinkProps, useLocation } from 'react-router-dom'

type IProps = LinkProps

export const BannerLink = (props: IProps) => {
    const isSelected = useLocation().pathname === props.to // TODO this is a little hacky and it would be better to use some state management here

    return (
        <Link
            className={`hover:underline text-gray-300 font-light rounded-md bg-slate-800 bg-opacity-50 p-2 ${
                isSelected ? 'text-gray-100 bg-opacity-90 underline' : ''
            }`}
            {...props}
        >
            {props.children}
        </Link>
    )
}
