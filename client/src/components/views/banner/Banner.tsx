import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import { config } from 'src/config'
import { Avatar } from '../../common/Avatar'

export const Banner = () => {
    const background: BannerLayer = {
        image: 'assets/banner-background.jpg',
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
            <div className="absolute inset-0 bottom-48 flex items-center justify-center flex-col">
                <Avatar />
                <h1 className="text-6xl text-white font-extralight">
                    {config.title}
                </h1>
                <h2 className="text-2xl mt-2 text-white font-thin">
                    {config.subtitle}
                </h2>
            </div>
        ),
    }

    const foregroundMountain: BannerLayer = {
        image: 'assets/mountain.png',
        translateY: [0, 15],
        scale: [1, 1.1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
    }

    const foregroundTrees: BannerLayer = {
        image: 'assets/trees.png',
        translateY: [15, -20],
        scale: [1, 1.2, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
    }

    const gradientOverlay: BannerLayer = {
        opacity: [0, 1],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="absolute inset-0 bg-black" />,
    }

    return (
        <ParallaxBanner
            layers={[
                background,
                headline,
                foregroundMountain,
                foregroundTrees,
                gradientOverlay,
            ]}
            className="h-full"
        />
    )
}
