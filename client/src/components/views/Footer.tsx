import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import { config } from 'src/config'

const Footer = () => {
    const foregroundTrees: BannerLayer = {
        image: 'assets/trees2.png',
        translateY: [30, -15],
        scale: [1, 1.2, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        className: 'z-50 pointer-events-none',
    }

    const gradientOverlay: BannerLayer = {
        opacity: [0, 0.7],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="absolute inset-0 bg-gradient-to-b from-black to-secondary-900" />
        ),
        className: 'pointer-events-none',
    }

    return (
        <ParallaxBanner
            layers={[gradientOverlay, foregroundTrees]}
            className="pt-20 h-1/2"
        >
            <footer className="p-3 mt-3 w-full text-center text-lg font-thin text-white">
                <p>
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    {config.copyrightText}
                </p>
                <p>Todo links here</p>
            </footer>
        </ParallaxBanner>
    )
}

export default Footer
