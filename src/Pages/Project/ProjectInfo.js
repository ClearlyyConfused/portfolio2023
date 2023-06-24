function ProjectInfo({ image, projectName, description, technologies, setDisplayInfo }) {
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
				<img src={image} alt={projectName} />
				<h1>{projectName}</h1>
				<h2>About</h2>
				<p>{description}</p>
				<h2>Technologies</h2>
				<div className="technologies">
					{technologies.map((tech) => {
						return <p>{tech}</p>;
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectInfo;
