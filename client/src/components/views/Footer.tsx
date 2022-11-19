import { config } from 'src/config'

const Footer = () => {
    return (
        <footer className="p-3 mt-3 w-full">
            <img className="mx-auto" src="assets/campfire.gif" />

            <p className="text-center font-light text-gray-400">
                Copyright &copy; {new Date().getFullYear()}{' '}
                {config.copyrightText}
            </p>
        </footer>
    )
}

export default Footer
