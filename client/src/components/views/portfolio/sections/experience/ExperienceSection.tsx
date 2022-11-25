import Link from 'src/components/common/Link'
import ExperienceTimeline from './ExperienceTimeline'

export const ExperienceSection = () => (
    <div className="mx-auto w-full p-6">
        <h3 className="text-3xl font-extralight text-center mb-10">
            Experience
        </h3>
        <div className="max-w-4xl mx-auto">
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
