import { config } from '../config'

const Header = () => (
    <div className="p-3">
        <h1 className="text-3xl text-center">{config.title}</h1>
    </div>
)

export default Header
