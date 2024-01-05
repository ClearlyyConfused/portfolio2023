import { useState, useEffect } from 'react';
import ProjectInfoScreen from './ProjectInfoScreen';

function Project({ project }) {
	// display project's description
	const [displayDescription, setDisplayDescription] = useState(false);
	// see if mouse is in the project panel
	const [inProject, setInProject] = useState(false);
	// display full project info
	const [displayInfo, setDisplayInfo] = useState(false);

	useEffect(() => {
		if (displayInfo) {
			// if displaying full project info:
			// hide the full page scrollbar, set padding to offset scrollbar being hidden, display project description
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = getScrollBarWidth() + 'px';
			body.style.overflowY = 'hidden';
			setDisplayDescription(true);
		}
		// prevents toggle light mode in mobile layout -> this rerenders -> scrolling unlocked
		else if (displayDescription || inProject) {
			// if not displaying full project info
			// undo above, if mouse is not in the project panel then hide project description
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = '0px';
			body.style.overflowY = 'scroll';
			if (!inProject) {
				setDisplayDescription(false);
			}
		}
	}, [displayInfo, displayDescription, inProject]);

	function mouseEntersProject() {
		setDisplayDescription(true);
		setInProject(true);
	}

	function mouseLeavesProject() {
		setDisplayDescription(false);
		setInProject(false);
	}

	return (
		<div className="project">
			<img src={project.image[0]} alt="" srcset="" />

			{/* black gradient when hovered */}
			<div
				onClick={() => setDisplayInfo(true)}
				onMouseEnter={mouseEntersProject}
				onMouseLeave={mouseLeavesProject}
				style={{ opacity: displayDescription ? 1 : 0.2 }}
				className="overlay"
			></div>

			{/* display description when project panel hovered */}
			<div
				onClick={() => setDisplayInfo(true)}
				onMouseEnter={mouseEntersProject}
				onMouseLeave={mouseLeavesProject}
				className={`project-info ${displayDescription ? 'active' : ''}`}
			>
				<h2>{project.projectName}</h2>
				<p>{project.description}</p>
				<div className="technologies">
					{project.technologies.map((tech) => {
						return <p>{tech}</p>;
					})}
				</div>
			</div>

			{displayInfo ? <ProjectInfoScreen project={project} setDisplayInfo={setDisplayInfo} /> : ''}
		</div>
	);
}

function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = '100%';
	inner.style.height = '200px';

	var outer = document.createElement('div');
	outer.style.position = 'absolute';
	outer.style.top = '0px';
	outer.style.left = '0px';
	outer.style.visibility = 'hidden';
	outer.style.width = '200px';
	outer.style.height = '150px';
	outer.style.overflow = 'hidden';
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 === w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);

	return w1 - w2;
}

export default Project;
