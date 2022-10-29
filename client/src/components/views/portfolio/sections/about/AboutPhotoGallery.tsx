import { Parallax } from 'react-scroll-parallax'

export const AboutPhotoGallery = () => (
    <div className="container h-full">
        <Parallax
            className="h-full"
            opacity={[0, 1]}
            startScroll={100}
            endScroll={800}
        >
            <div className="flex flex-wrap h-full">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block object-cover object-center w-full h-full rounded"
                            src="assets/gallery/gallery1.jpeg"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block object-cover object-center w-full h-full rounded"
                            src="assets/gallery/gallery2.jpeg"
                        />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block object-cover object-center w-full h-full rounded"
                            src="assets/gallery/gallery3.jpeg"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block object-cover object-center w-full h-full rounded"
                            src="assets/gallery/gallery4.jpeg"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block object-cover object-center w-full h-full rounded"
                            src="assets/gallery/gallery5.jpeg"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block object-cover object-center w-full h-full rounded"
                            src="assets/gallery/gallery6.jpeg"
                        />
                    </div>
                </div>
            </div>
        </Parallax>
    </div>
)
