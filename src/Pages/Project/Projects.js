import ProjectSection from './ProjectsSection';
// images should be 1400/1000 in devtools
import offcampusMcmaster from '../../images/offcampus-mcmaster.png';
import offcampusMcmaster2 from '../../images/offcampus-mcmaster2.png';
import offcampusMcmaster3 from '../../images/offcampus-mcmaster3.png';
import offcampusMcmaster4 from '../../images/offcampus-mcmaster4.png';
import offcampusMcmaster5 from '../../images/offcampus-mcmaster5.png';

import premierEase from '../../images/premier-ease.png';
import premierEase2 from '../../images/premier-ease2.png';
import premierEase3 from '../../images/premier-ease3.png';
import premierEase4 from '../../images/premier-ease4.png';

import blabberBox from '../../images/blabberbox.png';
import blabberBox2 from '../../images/blabberbox2.png';
import blabberBox3 from '../../images/blabberbox3.png';

import connect4fun from '../../images/connect4fun.png';
import connect4fun2 from '../../images/connect4fun2.png';

import todoList from '../../images/todoList.png';
import todoList2 from '../../images/todoList2.png';

import battleShip from '../../images/battleship.png';
import battleShip2 from '../../images/battleship2.png';

import treeter from '../../images/treeter.png';
import treeter2 from '../../images/treeter2.png';
import treeter3 from '../../images/treeter3.png';

import etchSketch from '../../images/etch-a-sketch.png';
import etchSketch2 from '../../images/etch-a-sketch2.png';

import { useState } from 'react';

function Projects() {
	const [yearFilter, setYearFilter] = useState(undefined);
	let leftColumnProjects = [];
	let rightColumnProjects = [];

	let i = 0;
	for (const project of allProjects) {
		if (project.lastUpdated !== yearFilter && yearFilter) {
			continue;
		}
		if (i % 2 === 0) {
			leftColumnProjects.push(project);
		} else {
			rightColumnProjects.push(project);
		}
		i++;
	}

	return (
		<ProjectSection
			leftColumnProjects={leftColumnProjects}
			rightColumnProjects={rightColumnProjects}
			setYearFilter={setYearFilter}
			yearFilter={yearFilter}
		/>
	);
}

const allProjects = [
	{
		image: [premierEase, premierEase2, premierEase3, premierEase4],
		projectName: 'Premier Ease',
		description: `A website that fetches data from an external API and displays data about the English Premier League. Data displayed includes league standings, live match scores, match results, and league news.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
		website: 'https://premier-ease.vercel.app/',
		github: [
			'https://github.com/louisdoan9/PremierEase',
			'https://github.com/louisdoan9/PremierEase_backend',
		],
		lastUpdated: 2023,
	},
	{
		image: [
			offcampusMcmaster,
			offcampusMcmaster2,
			offcampusMcmaster3,
			offcampusMcmaster4,
			offcampusMcmaster5,
		],
		projectName: 'OffCampus McMaster Clone',
		description: `A clone of McMaster's off-campus housing website. Allows user to upload information about a property and search uploaded properties.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
		website: 'https://mcmaster-housing-clone.vercel.app/',
		github: [
			'https://github.com/louisdoan9/mcmaster-housing-clone',
			'https://github.com/louisdoan9/mcmaster-housing-clone-api',
		],
		lastUpdated: 2023,
	},
	{
		image: [blabberBox, blabberBox2, blabberBox3],
		projectName: 'BlabberBox',
		description: `Chatting app that allows users to create accounts and create/join rooms with the room's name and password.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'Supabase'],
		website: 'https://blabberbox.vercel.app/',
		github: [
			'https://github.com/louisdoan9/blabberbox-frontend',
			'https://github.com/louisdoan9/blabberbox_backend',
		],
		lastUpdated: 2023,
	},
	{
		image: [treeter, treeter2, treeter3],
		projectName: 'Treeter',
		description: `Twitter-like messaging board that allows users to create accounts and posts. Users can also comment on other posts and update/delete their post.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
		website: 'https://treeter.vercel.app/',
		github: ['https://github.com/louisdoan9/treeter', 'https://github.com/louisdoan9/treeter-api'],
		lastUpdated: 2023,
	},
	{
		image: [connect4fun, connect4fun2],
		projectName: 'Connect4Fun',
		description: `A website that allows users to play Connect 4 with others in real-time.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'Supabase'],
		website: 'https://connect4fun.vercel.app/',
		github: ['https://github.com/louisdoan9/Connect4Fun'],
		lastUpdated: 2023,
	},
	{
		image: [todoList, todoList2],
		projectName: '2DO',
		description: `Todo app that allows users to create projects and then tasks under each project.`,
		technologies: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://louisdoan9.github.io/todoList/',
		github: ['https://github.com/louisdoan9/todoList'],
		lastUpdated: 2022,
	},
	{
		image: [etchSketch, etchSketch2],
		projectName: 'Etch-A-Sketch',
		description: `An etch-a-sketch that allows users to add colored squared to a board. User can also change number of squares board contains.`,
		technologies: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://louisdoan9.github.io/Etch-a-Sketch/',
		github: ['https://github.com/louisdoan9/Etch-a-Sketch'],
		lastUpdated: 2022,
	},
	{
		image: [battleShip, battleShip2],
		projectName: 'BattleShip',
		description: `Simple game of battleship vs an AI. AI has difficulty setting that makes it more/less likely to hit the user's ship.`,
		technologies: ['HTML', 'CSS', 'JavaScript', 'Jest'],
		website: 'https://louisdoan9.github.io/battleship/',
		github: ['https://github.com/louisdoan9/battleship'],
		lastUpdated: 2022,
	},
];

export default Projects;
