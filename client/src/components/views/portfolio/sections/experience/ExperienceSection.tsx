import ExperienceCard from './ExperienceCard'

export const ExperienceSection = () => (
    <div className="mx-auto w-full p-6 from-black to-[#220930] bg-gradient-to-b">
        <h3 className="text-3xl font-extralight text-center mb-10">
            Experience
        </h3>
        <div className="w-5/6 max-w-2xl mx-auto">
            <ExperienceCard
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
                companyUrl="https://sparelabs.com"
                title="Senior Software Engineer"
                logo="assets/spare-logo.svg"
                dateString="March 2019 to June 2021"
            >
                <p>TODO</p>
            </ExperienceCard>
        </div>
    </div>
)

export default ExperienceSection
