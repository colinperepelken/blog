import GalleryImage from './GalleryImage'

export const AboutPhotoGallery = () => (
    <div className="container h-full">
        <div className="flex flex-wrap h-full">
            <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1">
                    <GalleryImage src="assets/gallery/gallery1.jpeg" />
                </div>
                <div className="w-1/2 p-1">
                    <GalleryImage src="assets/gallery/gallery2.jpeg" />
                </div>
                <div className="w-full p-1">
                    <GalleryImage src="assets/gallery/gallery3.jpeg" />
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1">
                    <GalleryImage src="assets/gallery/gallery4.jpeg" />
                </div>
                <div className="w-1/2 p-1">
                    <GalleryImage src="assets/gallery/gallery5.jpeg" />
                </div>
                <div className="w-1/2 p-1">
                    <GalleryImage src="assets/gallery/gallery6.jpeg" />
                </div>
            </div>
        </div>
    </div>
)
