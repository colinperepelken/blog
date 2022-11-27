import { ParallaxBanner, useParallaxController } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import { config } from 'src/config'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import FooterIcon from './FooterIcon'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    // This custom hook updates the controller each time the location changes.
    // See: https://react-scroll-parallax.damnthat.tv/docs/usage/hooks/use-parallax-controller#example-route-change-hook
    const useUpdateControllerOnRouteChange = () => {
        const location = useLocation()
        const parallaxController = useParallaxController()

        useEffect(() => {
            setTimeout(() => {
                parallaxController?.update()
            }, 500)
        }, [location.pathname])
    }
    useUpdateControllerOnRouteChange()

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
            <footer className="p-3 mt-3 w-full text-center text-white">
                <div className="space-x-10 mt-2">
                    <FooterIcon href={config.linkedInUrl} icon={faLinkedinIn} />
                    <FooterIcon href={config.githubUrl} icon={faGithub} />
                    <FooterIcon href={config.mailUrl} icon={faEnvelope} />
                </div>
                <p className="text-lg font-thin mt-3">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    {config.copyrightText}
                </p>
            </footer>
        </ParallaxBanner>
    )
}

export default Footer
