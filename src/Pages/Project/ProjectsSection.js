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
				<button onClick={() => setYearFilter(2024)} className={yearFilter === 2024 ? 'active' : ''}>
					2024
				</button>
				<button onClick={() => setYearFilter(2023)} className={yearFilter === 2023 ? 'active' : ''}>
					2023
				</button>
			</div>
			<div className="columns">
				<section className="left-column">
					{leftColumnProjects.map((project, key) => {
						return (
							<Project
								key={yearFilter === 2024 ? 100 + key : yearFilter === 2023 ? 200 + key : key}
								project={project}
							/>
						);
					})}
				</section>
				<section className="right-column">
					{rightColumnProjects.map((project, key) => {
						return (
							<Project
								key={yearFilter === 2024 ? 100 + key + 4 : yearFilter === 2023 ? 200 + key + 4 : key + 4}
								project={project}
							/>
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default ProjectSection;
