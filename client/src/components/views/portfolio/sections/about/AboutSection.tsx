import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import BorderedDiv from 'src/components/common/BorderedDiv'
import { AboutPhotoGallery } from './AboutPhotoGallery'

export const AboutSection = () => {
    const foregroundTrees: BannerLayer = {
        image: 'assets/trees2.png',
        translateY: [20, -20],
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
            className="pt-20"
        >
            <div className="my-auto h-full mx-20">
                <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-20 justify-items-stretch">
                    <BorderedDiv>
                        <h3 className="text-3xl font-extralight">About</h3>
                        <div className="leading-relaxed font-extralight text-gray-400 p-2">
                            <p className="my-2">
                                I am very lucky to live in beautiful Kelowna, BC
                                with my wonderful wife and my energetic dog
                                Goose. I graduated from the University of
                                British Columbia (UBCO) in 2018 and have been
                                enjoying my work as a software engineer since.
                            </p>
                            <p className="my-2">
                                I love riding my bike everywhere I can — to the
                                grocery store, on camping trips, and mountain
                                biking in the surrounding hills. I am passionate
                                about bicycles and alternative methods of
                                transportation as means to improve the lives of
                                others and to save the environment.
                            </p>
                            <p className="my-2">
                                I am currently working with Spare to build the
                                future of sustainable transportation. I am a
                                software engineer on the Launch team, and work
                                across the stack using Node.js, React, and
                                TypeScript.
                            </p>
                        </div>
                    </BorderedDiv>
                    <div className="lg:col-span-2">
                        <AboutPhotoGallery />
                    </div>
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default AboutSection
