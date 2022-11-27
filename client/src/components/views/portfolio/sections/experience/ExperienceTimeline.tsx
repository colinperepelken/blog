import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'src/components/common/Link'

const ExperienceTimeline = () => {
    const experiences = [
        {
            logo: 'assets/spare-logo.svg',
            title: 'Senior Software Engineer',
            company: 'Spare Labs',
            companyUrl: 'https://sparelabs.com',
            dateString: 'July 2021 to Present',
            description: (
                <>
                    <p>
                        Working across the stack to add new features to our
                        rider & driver mobile apps, admin web platform, API, and
                        micro-services using TypeScript, Node.js, React.js,
                        PostgreSQL, GCP and more.
                    </p>
                    <p>
                        On-call responder of the Site Reliability Engineering
                        (SRE) team. Experience troubleshooting complex
                        infrastructure issues.
                    </p>
                    <p>
                        Experience leading technical interviews, evaluating
                        candidates, and improving our interview processes.
                    </p>
                    <p>
                        Strong teamwork and leadership skills as a reviewer of
                        technical designs, leader of sprint rituals, and pair
                        programmer.
                    </p>
                </>
            ),
        },
        {
            logo: 'assets/lingel-learning-logo.jpeg',
            title: 'Senior Software Engineer',
            company: 'Lingel Learning',
            companyUrl: 'https://lingellearning.com',
            dateString: 'April 2019 to June 2021',
            description: (
                <>
                    <p>
                        Developed themes, authentication plugins, custom
                        reports, and learning modules using PHP, Vue.js, and
                        JavaScript to client specifications.
                    </p>
                    <p>
                        Deployed a SaaS Moodle solution using a load-balanced
                        AWS infrastructure, to better manage client sites in
                        Canada and Australia.
                    </p>
                    <p>
                        Gathered requirements from clients, and provided support
                        services to troubleshoot & resolve issues.
                    </p>
                    <p>
                        Managed and mentored Junior Developers. Involved in the
                        hiring and interview process for multiple positions.
                    </p>
                </>
            ),
        },
        {
            logo: 'assets/wcln-logo.png',
            title: 'Software Developer',
            company: 'Western Canadian Learning Network',
            companyUrl: 'https://wcln.ca',
            dateString: 'May 2016 to September 2020 (Contract)',
            description: (
                <>
                    <p>
                        Developed an LTI provider to distribute courses to
                        school districts across Western Canada. The provider
                        handles millions of student requests every year and has
                        been integrated into Moodle, Canvas, and D2L.
                    </p>
                    <p>
                        Created a Learning Object Repository using Vue.js to
                        store and manage 5000+ games, projects, video tutorials,
                        and learning guides.
                    </p>
                    <p>
                        Developed a Game Creator used by teachers to create 200+
                        educational resources.
                    </p>
                    <p>
                        Created a Computer Science 11 course in line with the
                        new BC education curriculum.
                    </p>
                </>
            ),
        },
    ]

    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <div className="relative pb-8">
                            {index !== experiences.length - 1 ? (
                                <span
                                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-primary-800"
                                    aria-hidden="true"
                                />
                            ) : null}
                            <div className="relative flex items-start space-x-3">
                                <div className="relative">
                                    <img
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ring-8 ring-primary-800 mr-4"
                                        src={experience.logo}
                                        alt={`${experience.company} company logo`}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div>
                                        <div className="text-sm">
                                            {experience.title}{' '}
                                            <FontAwesomeIcon icon={faAt} />{' '}
                                            <Link href={experience.companyUrl}>
                                                {experience.company}
                                            </Link>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">
                                            {experience.dateString}
                                        </p>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-400 space-y-2">
                                        {experience.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceTimeline
