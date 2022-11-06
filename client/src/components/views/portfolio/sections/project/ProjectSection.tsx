import ProjectCard from './ProjectCard'
import { IProjectCardProps } from './ProjectCard'

const projects: IProjectCardProps[] = [
    {
        title: 'bikegears.ca',
        description:
            "This website allows cyclists to compute gear ratios, gear inches and several other useful calculations. It provides dynamic graphs, auto-generated insights, and table data to help users choose suitable gearing for their bikes. Users can compare results for multiple bikes at the same time, and can read more about each calculation by visiting the 'Learn' section.",
        githubUrl: 'https://github.com/colinperepelken/bikegears',
        liveUrl: 'https://bikegears.ca',
        image: 'assets/projects/bike-gears.png',
    },
    {
        title: 'perepelken.ca',
        description:
            'My portfolio website that you are currently viewing. I have also created a Blog, where I plan to write about my hobbies, software development, and anything else that captures my interest.',
        githubUrl: 'https://github.com/colinperepelken/blog',
        liveUrl: 'https://perepelken.ca',
        image: 'assets/projects/blog.png',
    },
    {
        title: 'Portfolio Website v1',
        description: 'My previous portfolio website that is no longer live.',
        githubUrl: 'https://github.com/colinperepelken/perepelken.ca',
        image: 'assets/projects/old-portfolio.png',
    },
    {
        title: 'LTI Provider for Canadian School Districts',
        description:
            'A Learning Tools Interoperability (LTI) provider that allows access to elementary through highschool courses to school districts across Western Canada. The provider handles millions of student requests for resources every year and has been integrated into Moodle, Canvas, and D2L.',
        githubUrl: 'https://github.com/wcln/moodle-local_lti',
        image: 'assets/projects/lti.png',
    },
    {
        title: 'Learning Object Repository',
        description:
            'The Learning Object Repository was built using Vue.js to store and manage 5000+ games, projects, video tutorials and other resources which can be embedded in courses by teachers to assist with online learning.',
        githubUrl: 'https://github.com/wcln/moodle-local_lor',
        liveUrl: 'https://wcln.ca/local/lor/index.php/resources',
        image: 'assets/projects/lor.png',
    },
    {
        title: 'RSA Cryptosystem in Python',
        description:
            'A Python implementation of the RSA cryptosystem. Created for my own learning purposes. Capable of generating extremely simple and breakable (but functionally correct) public and private keys. These keys can be used from the command line to encrypt and decrypt files.',
        githubUrl: 'https://github.com/colinperepelken/python-rsa',
        image: 'assets/projects/python-rsa.png',
    },
]

export const ProjectSection = () => (
    <div className="mx-auto w-full p-6 to-black from-[#220930] bg-gradient-to-b">
        <h3 className="text-3xl font-extralight text-center mb-10">Projects</h3>
        <div className="grid grid-cols-3 gap-4 justify-center">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    </div>
)

export default ProjectSection
