import BorderedDiv from 'src/components/common/BorderedDiv'

interface IProps {
    company: string
    title: string
    children?: React.ReactNode
    logo?: string
    companyUrl: string
    dateString: string
}

export const ExperienceCard = (props: IProps) => (
    <BorderedDiv className="w-full my-10">
        <div className="flex">
            <img className="mr-4 w-12 h-12 rounded" src={props.logo} />
            <div className="flex flex-col justify-between leading-normal">
                <h5 className="text-2xl tracking-tight text-white font-extralight mb-0">
                    <span className="font-light">{props.title}</span> &mdash;{' '}
                    <a
                        className="text-blue-300"
                        href={props.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {props.company}
                    </a>
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.dateString}
                </p>
            </div>
        </div>

        <div className="leading-relaxed font-extralight text-gray-400 p-2">
            <div className="my-2">{props.children}</div>
        </div>
    </BorderedDiv>
)

export default ExperienceCard
