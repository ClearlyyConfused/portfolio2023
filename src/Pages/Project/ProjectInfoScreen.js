import './ProjectInfoScreen.css';
import closeIcon from '../../images/close-circle-svgrepo-com.svg';
import { useEffect, useState } from 'react';

function ProjectInfo({ project, setDisplayInfo }) {
	const [displayedImage, setDisplayedImage] = useState(0);
	const [fullScreenImage, setFullScreenImage] = useState(null);

	function getWindowWidth() {
		const { innerWidth: width } = window;
		return width;
	}

	const [windowWidth, setWindowWidth] = useState(getWindowWidth());

	useEffect(() => {
		function handleResize() {
			setWindowWidth(getWindowWidth());
			if (windowWidth <= 495) {
				setFullScreenImage(null);
			}
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [windowWidth]);

	function minimizeImage(e) {
		e.preventDefault();
		if (e.target === document.getElementsByClassName('full-screen-image-background')[0]) {
			setFullScreenImage(null);
		}
	}

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
				<h1>{project.projectName}</h1>
				{/* placeholder container so image can load in without moving elements */}
				<div className="project-image-container">
					<img
						onClick={() => {
							if (windowWidth > 495) {
								setFullScreenImage(displayedImage);
							}
						}}
						src={project.image[displayedImage]}
						alt={project.projectName}
					/>
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
					{project.website !== '' ? (
						<div>
							<h2>Deployment</h2>
							<a target="_blank" rel="noopener noreferrer" href={project.website}>
								{project.website}
							</a>
						</div>
					) : (
						''
					)}
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
			{/* full screen image display */}
			{fullScreenImage !== null ? (
				<div className="full-screen-image-background" onClick={minimizeImage}>
					<div>
						<img
							onClick={() => {
								setFullScreenImage(null);
							}}
							src={closeIcon}
							alt="close"
						/>
						<img src={project.image[fullScreenImage]} alt="" />
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default ProjectInfo;
