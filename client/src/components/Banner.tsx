import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import { config } from 'src/config'
import { Avatar } from './Avatar'

export const Banner = () => {
    const background: BannerLayer = {
        image: 'assets/banner-background.jpeg',
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
    }

    const headline: BannerLayer = {
        translateY: [0, 30],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <Avatar />
                <h1 className="text-6xl md:text-8xl text-white font-thin">
                    {config.title}
                </h1>
                <h2 className="text-3xl mt-2 text-white font-thin">
                    Senior Software Engineer
                </h2>
            </div>
        ),
    }

    const foreground: BannerLayer = {
        image: 'assets/banner-foreground.png',
        translateY: [0, 15],
        scale: [1, 1.1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
    }

    const gradientOverlay: BannerLayer = {
        opacity: [0, 1],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="absolute inset-0 bg-gradient-to-t from-black to-blue-900" />
        ),
    }

    return (
        <ParallaxBanner
            layers={[background, headline, foreground, gradientOverlay]}
            className="h-full"
        />
    )
}
