import BorderedDiv from 'src/components/common/BorderedDiv'

export interface IProjectCardProps {
    title: string
    description: string
    image: string
    githubUrl: string
    liveUrl?: string
}

export const ProjectCard = (props: IProjectCardProps) => (
    <BorderedDiv>
        <img src={props.image} alt="Project image" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
            <a
                href={props.githubUrl}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary-700 rounded-lg hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300"
            >
                Source
            </a>
            {props.liveUrl && (
                <a
                    href={props.liveUrl}
                    className="inline-flex items-center ml-2 py-2 px-3 text-sm font-medium text-center text-white bg-secondary-700 rounded-lg hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300"
                >
                    Live
                </a>
            )}
        </div>
    </BorderedDiv>
)

export default ProjectCard
