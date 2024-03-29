import PortfolioSection from './PortfolioSection'
import AboutSection from './sections/about/AboutSection'
import ExperienceSection from './sections/experience/ExperienceSection'
import ProjectSection from './sections/project/ProjectSection'

export const Portfolio = () => (
    <div>
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
