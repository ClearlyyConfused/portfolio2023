import ProjectSection from './ProjectsSection';
// images should be 1440/1000 in devtools
import offcampusMcmaster from '../../images/offcampus-mcmaster.png';
import premierEase from '../../images/premier-ease.png';
import blabberBox from '../../images/blabberbox.png';
import deepDive from '../../images/deepDive.png';
import todoList from '../../images/todoList.png';
import battleShip from '../../images/battleship.png';
import treeter from '../../images/treeter.png';
import etchSketch from '../../images/etch-a-sketch.png';
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
		image: premierEase,
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
		image: offcampusMcmaster,
		projectName: 'OffCampus McMaster Clone',
		description: `A clone of my university's off-campus housing website. Allows user to upload information about a property and search uploaded properties.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
		website: 'https://mcmaster-housing-clone.vercel.app/',
		github: [
			'https://github.com/louisdoan9/mcmaster-housing-clone',
			'https://github.com/louisdoan9/mcmaster-housing-clone-api',
		],
		lastUpdated: 2023,
	},
	{
		image: blabberBox,
		projectName: 'BlabberBox',
		description: `Basic chatting app that allows users to create accounts and create/join rooms with the room's name and password.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'Supabase'],
		website: 'https://blabberbox.vercel.app/',
		github: [
			'https://github.com/louisdoan9/blabberbox-frontend',
			'https://github.com/louisdoan9/blabberbox_backend',
		],
		lastUpdated: 2023,
	},
	{
		image: treeter,
		projectName: 'Treeter',
		description: `Twitter-like messaging board that allows users to create accounts and posts. Users can also comment on other posts and update/delete their post.`,
		technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
		website: 'https://treeter.vercel.app/',
		github: ['https://github.com/louisdoan9/treeter', 'https://github.com/louisdoan9/treeter-api'],
		lastUpdated: 2023,
	},
	{
		image: deepDive,
		projectName: 'Deep Dive',
		description: `An experimental site that allows users to control a submarine and explore the depths of the ocean by scrolling down the page. The user can discover and get information about creatures they find by clicking on them.`,
		technologies: ['React', 'CSS/SASS'],
		website: 'https://deepdive.vercel.app/',
		github: ['https://github.com/louisdoan9/deep_dive'],
		lastUpdated: 2023,
	},
	{
		image: todoList,
		projectName: '2DO',
		description: `Simple todo app that allows users to create projects and then tasks under each project.`,
		technologies: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://louisdoan9.github.io/todoList/',
		github: ['https://github.com/louisdoan9/todoList'],
		lastUpdated: 2022,
	},
	{
		image: etchSketch,
		projectName: 'Etch-A-Sketch',
		description: `An etch-a-sketch that allows users to add colored squared to a board. User can also change number of squares board contains.`,
		technologies: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://louisdoan9.github.io/Etch-a-Sketch/',
		github: ['https://github.com/louisdoan9/Etch-a-Sketch'],
		lastUpdated: 2022,
	},
	{
		image: battleShip,
		projectName: 'BattleShip',
		description: `Simple game of battleship vs an AI. AI has difficulty setting that makes it more/less likely to hit the user's ship.`,
		technologies: ['HTML', 'CSS', 'JavaScript', 'Jest'],
		website: 'https://louisdoan9.github.io/battleship/',
		github: ['https://github.com/louisdoan9/battleship'],
		lastUpdated: 2022,
	},
];

export default Projects;
