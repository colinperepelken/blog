import { config } from '../config'

const Header = () => (
    <div>
        <h1 className="underline">{config.title}</h1>
    </div>
)

export default Header
