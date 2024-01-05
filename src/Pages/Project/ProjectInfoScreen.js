import './ProjectInfoScreen.css';
import closeIcon from '../../images/close-circle-svgrepo-com.svg';
import { useState } from 'react';

function ProjectInfo({ project, setDisplayInfo }) {
	const [displayedImage, setDisplayedImage] = useState(0);

	return (
		// screen overlay displaying project info
		<div className="project-info-screen">
			{/* space next to info panel */}
			<div
				className="blank-space"
				onClick={() => {
					setDisplayInfo(false);
				}}
			></div>
			<div className="info-panel">
				<img
					onClick={() => {
						setDisplayInfo(false);
					}}
					src={closeIcon}
					alt="close"
				/>
				{/* placeholder container so image can load in without moving elements */}
				<div className="project-image-container">
					<img src={project.image[displayedImage]} alt={project.projectName} />
					<div className="sub-images">
						{project.image.map((image, index) => {
							return (
								<img
									onClick={() => {
										setDisplayedImage(index);
									}}
									src={image}
									alt={project.projectName}
									className={displayedImage === index ? 'active' : ''}
								/>
							);
						})}
					</div>
				</div>
				<div className="info">
					<h1>{project.projectName}</h1>
					<div>
						<h2>About</h2>
						<p>{project.description}</p>
					</div>
					<div>
						<h2>Technologies</h2>
						<div className="technologies">
							{project.technologies.map((tech) => {
								return <p>{tech}</p>;
							})}
						</div>
					</div>
					<div>
						<h2>Website</h2>
						<a target="_blank" rel="noopener noreferrer" href={project.website}>
							{project.website}
						</a>
					</div>
					<div>
						<h2>Github</h2>
						<div className="github-links">
							{project.github.map((link) => {
								return <a href={link}>{link}</a>;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectInfo;
