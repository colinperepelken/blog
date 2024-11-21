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
                            An enthusiastic software engineer who strives to
                            make the world a better, more sustainable place.
                            I&apos;m passionate about contributing to solutions
                            that derive real-world change, and positively affect
                            the lives of others.
                        </p>
                        <p>
                            I am very lucky to live in beautiful Kelowna, BC
                            with my wonderful wife and my energetic dog Goose. I
                            graduated from the University of British Columbia
                            (UBCO) in 2018 and have been enjoying my work as a
                            software engineer since.
                        </p>
                        <p>
                            I love riding my bike everywhere I can — to the
                            grocery store, on camping trips, and mountain biking
                            in the surrounding hills. I am passionate about
                            bicycles and alternative methods of transportation
                            as means to improve the lives of others and to save
                            the environment.
                        </p>
                        <p>
                            I am currently working with Spare to build the
                            future of sustainable transportation using Node.js,
                            React.js, and TypeScript.
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
