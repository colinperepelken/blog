import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import { config } from 'src/config'

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
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <h1 className="text-6xl text-white font-extralight">
                    {config.title}
                </h1>
                <h2 className="text-2xl mt-2 text-white font-thin">
                    a blog by Colin
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
        children: <div className="absolute inset-0 bg-black" />,
    }

    return (
        <ParallaxBanner
            layers={[background, headline, foreground, gradientOverlay]}
            className="h-full"
        />
    )
}
