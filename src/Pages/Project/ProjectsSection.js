import './Projects.css';
import Project from './Project';

function ProjectSection({ leftColumnProjects, rightColumnProjects, setYearFilter, yearFilter }) {
	return (
		<main className="projects" id="projects">
			<h1>Projects.📋</h1>
			<div className="project-filter">
				<button onClick={() => setYearFilter(undefined)} className={yearFilter === undefined ? 'active' : ''}>
					All
				</button>
				<button onClick={() => setYearFilter(2023)} className={yearFilter === 2023 ? 'active' : ''}>
					2023
				</button>
				<button onClick={() => setYearFilter(2022)} className={yearFilter === 2022 ? 'active' : ''}>
					2022
				</button>
			</div>
			<div className="columns">
				<section className="left-column">
					{leftColumnProjects.map((project) => {
						return <Project key={Math.random()} project={project} />;
					})}
				</section>
				<section className="right-column">
					{rightColumnProjects.map((project) => {
						return <Project key={Math.random()} project={project} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default ProjectSection;
