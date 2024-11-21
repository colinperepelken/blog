import { config } from 'src/config'

const Footer = () => {
    return (
        <footer className="p-20 mt-3 w-full text-center text-secondary">
            <p className="text-md font-thin mt-3">
                Copyright &copy; {new Date().getFullYear()}{' '}
                {config.copyrightText}
            </p>
        </footer>
    )
}

export default Footer
