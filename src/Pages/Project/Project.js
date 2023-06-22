import { useState } from 'react';

function Project({ image, projectName, description, technologies }) {
	const [displayDiscription, setDisplaydiscription] = useState(false);

	return (
		<div
			className="project"
			onMouseEnter={() => setDisplaydiscription(true)}
			onMouseLeave={() => setDisplaydiscription(false)}
		>
			<img src={image} alt="" srcset="" />

			{/* black gradient when hovered */}
			<div style={{ opacity: displayDiscription ? 1 : 0.2 }} className="overlay"></div>

			{displayDiscription ? (
				<div className="project-info">
					<h2>{projectName}</h2>
					<p>{description}</p>
					<div className="technologies">
						{technologies.map((tech) => {
							return <p>{tech}</p>;
						})}
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default Project;
