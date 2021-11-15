import { config } from '../config'

const Footer = () => {
    return (
        <footer>
            <p>
                Copyright &copy; {new Date().getFullYear()} <a href={config.copyrightUrl}>{config.copyrightText}</a>
            </p>
        </footer>
    )
}

export default Footer
