import { config } from '../config'

const Footer = () => {
    return (
        <footer className="text-center mt-6 font-thin">
            <p>
                Copyright &copy; {new Date().getFullYear()}{' '}
                <a href={config.copyrightUrl}>{config.copyrightText}</a>
            </p>
        </footer>
    )
}

export default Footer
