import './Projects.css';
import red from '../../images/red.png';
import Project from './Project';

function Projects() {
	return (
		<main className="projects">
			<section className="left-column">
				<h1>Projects.📋</h1>
				<Project
					image={red}
					projectName={'Project1'}
					description={
						'Ad nulla exercitation excepteur eu consequat aliquip elit cupidatat voluptate consequat aliquip irure.'
					}
					technologies={['test1', 'test2', 'test3']}
				/>
				<Project image={red} projectName={''} description={''} technologies={[]} />
				<Project image={red} projectName={''} description={''} technologies={[]} />
			</section>
			<section className="right-column">
				<h1>Projects.📋</h1>
				<Project image={red} projectName={''} description={''} technologies={[]} />
				<Project image={red} projectName={''} description={''} technologies={[]} />
				<Project image={red} projectName={''} description={''} technologies={[]} />
			</section>
		</main>
	);
}

export default Projects;
