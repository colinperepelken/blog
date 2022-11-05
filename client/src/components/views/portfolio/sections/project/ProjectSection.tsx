import ProjectCard from './ProjectCard'

export const ProjectSection = () => (
    <div className="mx-auto w-full p-6 to-black from-[#220930] bg-gradient-to-b">
        <h3 className="text-3xl font-extralight text-center mb-10">Projects</h3>
        <div className="grid grid-cols-3 gap-4 justify-center">
            <ProjectCard title="Project 1" description="" githubUrl="" />
        </div>
    </div>
)

export default ProjectSection
