import Link from 'src/components/common/Link'
import ExperienceTimeline from './ExperienceTimeline'

export const ExperienceSection = () => (
    <div className="mx-auto w-full p-6">
        <h3 className="text-3xl font-extralight text-center mb-10">
            Experience
        </h3>
        <div className="w-5/6 max-w-2xl mx-auto">
            {/* <ExperienceCard
                company="Spare"
                companyUrl="https://sparelabs.com"
                title="Senior Software Engineer"
                logo="assets/spare-logo.svg"
                dateString="July 2021 to Present"
            >
                <p>TODO</p>
            </ExperienceCard>
            <ExperienceCard
                company="Lingel Learning"
                companyUrl="https://lingellearning.com"
                title="Senior Software Engineer"
                logo="assets/lingel-learning-logo.jpeg"
                dateString="March 2019 to June 2021"
            >
                <p>TODO</p>
            </ExperienceCard>
            <ExperienceCard
                company="Western Canadian Learning Network"
                companyUrl="https://wcln.ca"
                title="Software Developer"
                logo="assets/wcln-logo.png"
                dateString="May 2016 to September 2020"
            >
                <p>TODO</p>
            </ExperienceCard> */}
            <ExperienceTimeline />
        </div>
        <div className="text-center mt-24">
            You can view my full resumé and connect with me on{' '}
            <Link
                href="https://www.linkedin.com/in/colin-perepelken/"
                rel="noreferrer"
            >
                LinkedIn
            </Link>
        </div>
    </div>
)

export default ExperienceSection
