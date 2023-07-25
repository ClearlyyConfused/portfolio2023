import './Projects.css';
import Project from './Project';

function ProjectSection({ leftColumnProjects, rightColumnProjects }) {
	return (
		<main className="projects" id="projects">
			<section className="left-column">
				<h1>Projects.📋</h1>
				{leftColumnProjects.map((project) => {
					return <Project project={project} />;
				})}
			</section>
			<section className="right-column">
				<h1>Projects.📋</h1>
				{rightColumnProjects.map((project) => {
					return <Project project={project} />;
				})}
			</section>
		</main>
	);
}

export default ProjectSection;
