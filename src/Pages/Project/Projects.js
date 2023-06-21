import './Projects.css';
import red from '../../images/red.png';
import Project from './Project';

function Projects() {
	return (
		<main className="projects">
			<section className="left-column">
				<h1>Projects.📋</h1>
				<Project image={red} description={''} />
				<Project image={red} description={''} />
				<Project image={red} description={''} />
			</section>
			<section className="right-column">
				<h1>Projects.📋</h1>
				<Project image={red} description={''} />
				<Project image={red} description={''} />
				<Project image={red} description={''} />
			</section>
		</main>
	);
}

export default Projects;
