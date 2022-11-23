import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
    href: string
    icon: IconProp
}

const FooterIcon = (props: IProps) => (
    <a
        href={props.href}
        className="text-secondary-400 text-6xl hover:cursor-pointer hover:text-secondary-300"
    >
        <FontAwesomeIcon icon={props.icon} />
    </a>
)

export default FooterIcon
