import PortfolioSection from './PortfolioSection'
import AboutSection from './sections/about/AboutSection'
import ExperienceSection from './sections/experience/ExperienceSection'
import ProjectSection from './sections/ProjectSection'

export const Portfolio = () => (
    <div className="h-full w-full">
        <PortfolioSection>
            <AboutSection />
        </PortfolioSection>
        <PortfolioSection>
            <ExperienceSection />
        </PortfolioSection>
        <PortfolioSection>
            <ProjectSection />
        </PortfolioSection>
    </div>
)

export default Portfolio
