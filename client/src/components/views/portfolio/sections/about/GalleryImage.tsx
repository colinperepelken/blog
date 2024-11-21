interface IProps {
    src: string
}

export const GalleryImage = (props: IProps) => (
    <img
        alt="gallery"
        className="block object-cover object-center w-full h-full border-secondary-300 border-2 p-2"
        src={props.src}
    />
)

export default GalleryImage
