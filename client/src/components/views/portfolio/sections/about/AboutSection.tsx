import BorderedDiv from 'src/components/common/BorderedDiv'
import { AboutPhotoGallery } from './AboutPhotoGallery'

export const AboutSection = () => {
    return (
        <div className="mx-auto w-full p-6">
            <div className="gap-20 justify-items-center">
                <div>
                    <h3 className="text-3xl font-extralight text-center mb-10">
                        About
                    </h3>
                    <div className="leading-relaxed font-extralight text-black p-2 space-y-2">
                        <p>
                            A results driven full-stack Staff Software Engineer
                            with 6+ years of professional experience. Values
                            roles focused on driving long-term success, and
                            crafting impactful features that positively affect
                            the lives of others.
                        </p>
                        <p>
                            Currently working with Spare to support transit
                            agencies by providing innovative technology for
                            paratransit and microtransit services, empowering
                            over 10 million rides globally.
                        </p>
                    </div>
                </div>
                <div className="xl:col-span-2 min-w-full">
                    <AboutPhotoGallery />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
