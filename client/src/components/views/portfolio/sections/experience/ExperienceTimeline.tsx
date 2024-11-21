import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'src/components/common/Link'

const ExperienceTimeline = () => {
    const experiences = [
        {
            logo: 'assets/spare-logo.svg',
            title: 'Staff Software Developer',
            company: 'Spare',
            companyUrl: 'https://spare.com',
            dateString: 'July 2021 to Present',
            description: (
                <>
                    <p>
                        Worked across the stack to add new features to our rider
                        and driver mobile apps, web platform, API, and backend
                        microservices using TypeScript, Node.js, React.js,
                        PostgreSQL, GCP and more.
                    </p>
                    <p>
                        Implemented integrations with Lyft and Uber, enabling
                        transit agencies to accept overflow trips. .
                    </p>
                    <p>
                        Designed and built Spare’s event-driven architecture
                        which utilizes a Pub/Sub implementation to process
                        millions of events, and serves as the foundation of
                        Spare’s Activity Log.
                    </p>
                    <p>
                        Performed database schema refactors and data migrations
                        affecting millions of riders with zero downtime.
                    </p>
                    <p>
                        On-call responder of the Site Reliability Engineering
                        (SRE) team.
                    </p>
                </>
            ),
        },
        {
            logo: 'assets/lingel-learning-logo.jpeg',
            title: 'Senior Software Developer',
            company: 'Lingel Learning',
            companyUrl: 'https://lingellearning.com',
            dateString: 'April 2019 to June 2021',
            description: (
                <>
                    <p>
                        Developed Moodle themes, authentication plugins, custom
                        reports, and learning modules using PHP, Laravel,
                        Vue.js, and JavaScript.
                    </p>
                    <p>
                        Created a SaaS version of Moodle to facilitate easier
                        onboarding and updating of hosted client sites.
                    </p>
                    <p>
                        Managed and mentored a team of Junior Software Engineers
                        across multiple timezones.
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
                        Developed a full stack LTI provider which enables 80+
                        school districts in Western Canada to integrate courses
                        developed by WCLN into their own learning management
                        systems.
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
        {
            logo: 'assets/vertigis-logo.jpg',
            title: 'Software Developer',
            company: 'Latitude Geographics',
            companyUrl: 'https://vertigisstudio.com/',
            dateString: 'May 2018 to August 2018',
            description: (
                <>
                    <p>
                        Developed web Geographic Information Systems (GIS) and
                        custom workflows for clients in various industries using
                        C#, .NET, and TypeScript.
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
                                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-primary-300"
                                    aria-hidden="true"
                                />
                            ) : null}
                            <div className="relative flex items-start space-x-3">
                                <div className="relative">
                                    <img
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 mr-4"
                                        src={experience.logo}
                                        alt={`${experience.company} company logo`}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div>
                                        <div className="text-sm">
                                            {experience.title} @{' '}
                                            <Link href={experience.companyUrl}>
                                                {experience.company}
                                            </Link>
                                        </div>
                                        <p className="mt-0.5 text-sm text-secondary-600">
                                            {experience.dateString}
                                        </p>
                                    </div>
                                    <div className="mt-2 text-sm text-secondary-500 space-y-2">
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
