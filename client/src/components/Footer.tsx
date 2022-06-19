import { config } from '../config'

const Footer = () => {
    return (
        <footer className="p-3 mt-3 fixed snap-center bottom-0">
            <p className="text-center">
                Copyright &copy; {new Date().getFullYear()}{' '}
                <a href={config.copyrightUrl}>{config.copyrightText}</a>
            </p>
        </footer>
    )
}

export default Footer
