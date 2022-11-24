import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
    icon: IconProp
    children?: React.ReactNode
    className?: string
}

const Alert = (props: IProps) => {
    return (
        <div
            className={`border-l-4 border-secondary-500 bg-primary-900 p-4 rounded ${props.className}`}
        >
            <div className="flex">
                <div className="flex-shrink-0 text-secondary-500">
                    <FontAwesomeIcon icon={props.icon} size="2xl" />
                </div>
                <div className="ml-3 first-letter:text-white-700 font-thin">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Alert
