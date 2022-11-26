import BorderedDiv from 'src/components/common/BorderedDiv'
import { AboutPhotoGallery } from './AboutPhotoGallery'

export const AboutSection = () => {
    return (
        <div className="my-auto h-full 2xl:mx-20 xl:mx-5">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 justify-items-center">
                <BorderedDiv>
                    <h3 className="text-3xl font-extralight">About</h3>
                    <div className="leading-relaxed font-extralight text-gray-400 p-2">
                        <p className="my-2">
                            I am very lucky to live in beautiful Kelowna, BC
                            with my wonderful wife and my energetic dog Goose. I
                            graduated from the University of British Columbia
                            (UBCO) in 2018 and have been enjoying my work as a
                            software engineer since.
                        </p>
                        <p className="my-2">
                            I love riding my bike everywhere I can — to the
                            grocery store, on camping trips, and mountain biking
                            in the surrounding hills. I am passionate about
                            bicycles and alternative methods of transportation
                            as means to improve the lives of others and to save
                            the environment.
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
                <div className="xl:col-span-2 min-w-full">
                    <AboutPhotoGallery />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
