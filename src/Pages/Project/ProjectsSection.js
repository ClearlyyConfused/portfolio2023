import './Projects.css';
import Project from './Project';

function ProjectSection({ leftColumnProjects, rightColumnProjects, setYearFilter, yearFilter }) {
	return (
		<main className="projects" id="projects">
			<h1 className="underline-animation">Projects.</h1>
			<div className="project-filter">
				<button onClick={() => setYearFilter(0)} className={yearFilter === 0 ? 'active' : ''}>
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
					{leftColumnProjects.map((project, key) => {
						return (
							<Project key={yearFilter === 2023 ? key + yearFilter : key - yearFilter} project={project} />
						);
					})}
				</section>
				<section className="right-column">
					{rightColumnProjects.map((project, key) => {
						return <Project key={(key + yearFilter) * -1} project={project} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default ProjectSection;
