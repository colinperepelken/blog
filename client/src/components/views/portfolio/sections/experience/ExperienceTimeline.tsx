const ExperienceTimeline = () => {
    const experiences = [
        {
            logo: 'assets/spare-logo.svg',
            title: 'Senior Software Engineer',
            company: 'Spare Labs',
            companyUrl: 'https://sparelabs.com',
            dateString: 'July 2021 to Present',
            description: 'Building the future of transportation...',
        },
        {
            logo: 'assets/lingel-learning-logo.jpeg',
            title: 'Senior Software Engineer',
            company: 'Lingel Learning',
            companyUrl: 'https://lingellearning.com',
            dateString: 'April 2019 to June 2021',
            description: 'Moodle stuff...',
        },
        {
            logo: 'assets/wcln-logo.png',
            title: 'Software Developer (Contract)',
            company: 'Western Canadian Learning Network',
            companyUrl: 'https://wcln.ca',
            dateString: 'May 2016 to September 2020',
            description: 'More Moodle stuff...',
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
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-primary-800 mr-4"
                                        src={experience.logo}
                                        alt={`${experience.company} company logo`}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div>
                                        <div className="text-sm">
                                            {experience.company}
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">
                                            {experience.dateString}
                                        </p>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-400">
                                        <p>{experience.description}</p>
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
