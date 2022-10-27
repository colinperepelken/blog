import { BannerLink } from './BannerLink'

export const BannerLinkContainer = () => (
    <div className="uppercase fixed right-10 top-5 z-10 gap-4 flex">
        <BannerLink to="/">👨🏼‍💻 Portfolio</BannerLink>
        <BannerLink to="/blog">📚 Blog</BannerLink>
    </div>
)
