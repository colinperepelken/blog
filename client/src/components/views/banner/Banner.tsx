import { config } from 'src/config'
import { Avatar } from '../../common/Avatar'
import { BannerLinkContainer } from './BannerLinkContainer'
import BannerIcon from './BannerIcon'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Banner = () => {
    return (
        <div
            style={{ height: '80vh' }}
            className='w-full bg-[url("../assets/background.jpg")] bg-cover bg-center relative'
        >
            <div className="absolute inset-0 flex items-center align-middle justify-center flex-col text-center space-y-5">
                <Avatar />
                <h1 className="text-6xl text-white font-extralight mt-2">
                    {config.title}
                </h1>
                <h2 className="text-2xl text-white font-thin">
                    {config.subtitle}
                </h2>
                <div className="space-x-5">
                    <BannerIcon href={config.linkedInUrl} icon={faLinkedinIn} />
                    <BannerIcon href={config.githubUrl} icon={faGithub} />
                    <BannerIcon href={config.mailUrl} icon={faEnvelope} />
                </div>
            </div>
            {config.isBlogEnabled && <BannerLinkContainer />}
        </div>
    )
}

export default Banner
