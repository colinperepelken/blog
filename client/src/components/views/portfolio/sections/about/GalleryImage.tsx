interface IProps {
    src: string
}

export const GalleryImage = (props: IProps) => (
    <img
        alt="gallery"
        className="block object-cover object-center w-full h-full rounded opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0"
        src={props.src}
    />
)

export default GalleryImage
