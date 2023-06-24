import { useState, useEffect } from 'react';
import ProjectInfo from './ProjectInfo';

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

function Project({ image, projectName, description, technologies }) {
	const [displayDescription, setDisplayDescription] = useState(false);
	const [displayInfo, setDisplayInfo] = useState(false);
	const [inP, setInP] = useState(false);

	useEffect(() => {
		if (displayInfo) {
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = getScrollBarWidth() + 'px';
			body.style.overflowY = 'hidden';
			setDisplayDescription(true);
		} else {
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = '0px';
			body.style.overflowY = 'scroll';
			if (!inP) {
				setDisplayDescription(false);
			}
		}
	}, [displayInfo, displayDescription, inP]);

	return (
		<div className="project">
			<img src={image} alt="" srcset="" />

			{/* black gradient when hovered */}
			<div
				onClick={() => setDisplayInfo(true)}
				onMouseEnter={() => {
					setDisplayDescription(true);
					setInP(true);
				}}
				onMouseLeave={() => {
					setDisplayDescription(false);
					setInP(false);
				}}
				style={{ opacity: displayDescription ? 1 : 0.2 }}
				className="overlay"
			></div>

			{displayDescription ? (
				// display description when project panel hovered
				<div
					onClick={() => setDisplayInfo(true)}
					onMouseEnter={() => {
						setDisplayDescription(true);
						setInP(true);
					}}
					onMouseLeave={() => {
						setDisplayDescription(false);
						setInP(false);
					}}
					className="project-info"
				>
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

			{displayInfo ? (
				<ProjectInfo
					image={image}
					projectName={projectName}
					description={description}
					technologies={technologies}
					setDisplayInfo={setDisplayInfo}
				/>
			) : (
				''
			)}
		</div>
	);
}

export default Project;
