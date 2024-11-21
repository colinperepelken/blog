import Banner from '../banner/Banner'
import PortfolioSection from './PortfolioSection'
import AboutSection from './sections/about/AboutSection'
import ExperienceSection from './sections/experience/ExperienceSection'
import ProjectSection from './sections/project/ProjectSection'

export const Portfolio = () => (
    <div className="space-y-24 h-full">
        <Banner />
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
