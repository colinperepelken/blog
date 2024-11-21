import BorderedDiv from 'src/components/common/BorderedDiv'

export interface IProjectCardProps {
    title: string
    description: string
    image: string
    githubUrl: string
    liveUrl?: string
}

export const ProjectCard = (props: IProjectCardProps) => (
    <BorderedDiv className="p-2">
        <img src={props.image} alt="Project image" />
        <div className="p-3">
            <h5 className="mb-2 text-2xl tracking-tight text-primary-600">
                {props.title}
            </h5>
            <p className="mb-3 font-light text-secondary-500">
                {props.description}
            </p>
            <a
                href={props.githubUrl}
                target="_blank"
                className="inline-flex items-center py-2 px-3 text-sm font-light text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                rel="noreferrer"
            >
                Source
            </a>
            {props.liveUrl && (
                <a
                    href={props.liveUrl}
                    target="_blank"
                    className="inline-flex items-center ml-2 py-2 px-3 text-sm font-light text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    rel="noreferrer"
                >
                    Live
                </a>
            )}
        </div>
    </BorderedDiv>
)

export default ProjectCard
