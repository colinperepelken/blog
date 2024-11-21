import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from 'src/components/common/Icon'

interface IProps {
    href: string
    icon: IconProp
}

const BannerIcon = (props: IProps) => (
    <a
        href={props.href}
        className="text-secondary-400 text-4xl
         hover:cursor-pointer hover:text-secondary-300"
    >
        <Icon icon={props.icon} />
    </a>
)

export default BannerIcon
