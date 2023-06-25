function ProjectInfo({ project, setDisplayInfo }) {
	return (
		<div className="project-info-screen">
			<div
				onClick={() => {
					setDisplayInfo(false);
				}}
				className="blank-space"
			></div>
			<div className="info">
				<button
					onClick={() => {
						setDisplayInfo(false);
					}}
				>
					X
				</button>
				<img src={project.image} alt={project.projectName} />
				<h1>{project.projectName}</h1>
				<h2>About</h2>
				<p>{project.description}</p>
				<h2>Technologies</h2>
				<div className="technologies">
					{project.technologies.map((tech) => {
						return <p>{tech}</p>;
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectInfo;
