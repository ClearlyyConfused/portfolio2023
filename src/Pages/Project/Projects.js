import ProjectSection from './ProjectsSection';
// images should be 1400/1000 in devtools
import offcampusMcmaster from '../../images/offcampus-mcmaster.png';
import offcampusMcmaster2 from '../../images/offcampus-mcmaster2.png';
import offcampusMcmaster3 from '../../images/offcampus-mcmaster3.png';
import offcampusMcmaster4 from '../../images/offcampus-mcmaster4.png';

import premierEase from '../../images/premier-ease.png';
import premierEase2 from '../../images/premier-ease2.png';
import premierEase3 from '../../images/premier-ease3.png';
import premierEase4 from '../../images/premier-ease4.png';

import blabberBox from '../../images/blabberbox.png';
import blabberBox2 from '../../images/blabberbox2.png';
import blabberBox3 from '../../images/blabberbox3.png';

import connect4fun from '../../images/connect4fun.png';
import connect4fun2 from '../../images/connect4fun2.png';

import thereeldeal from '../../images/thereeldeal.png';
import thereeldeal2 from '../../images/thereeldeal2.png';
import thereeldeal3 from '../../images/thereeldeal3.png';
import thereeldeal4 from '../../images/thereeldeal4.png';
import thereeldeal5 from '../../images/thereeldeal5.png';
import thereeldeal6 from '../../images/thereeldeal6.png';

import ratmaze from '../../images/ratmaze.png';
import ratmaze2 from '../../images/ratmaze2.png';

import treeter from '../../images/treeter.png';
import treeter2 from '../../images/treeter2.png';
import treeter3 from '../../images/treeter3.png';

import shortestpath from '../../images/shortestpath.png';
import shortestpath2 from '../../images/shortestpath2.png';

import { useState } from 'react';

function Projects() {
	const [yearFilter, setYearFilter] = useState(0);
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
		image: [thereeldeal, thereeldeal2, thereeldeal3, thereeldeal4, thereeldeal5, thereeldeal6],
		projectName: 'The Reel Deal',
		description: `A website where users can browse detailed movie reviews and see movie ratings.`,
		technologies: ['Angular', 'SASS', 'FastAPI', 'Psycopg', 'Postgres'],
		website: 'https://the-reel-deal.vercel.app/',
		github: ['https://github.com/louisdoan9/TheReelDeal', 'https://github.com/louisdoan9/TheReelDealBackend'],
		lastUpdated: 2024,
	},
	{
		image: [premierEase, premierEase2, premierEase3, premierEase4],
		projectName: 'Premier Ease',
		description: `A website that fetches data from an external API and displays data about the English Premier League. Data displayed includes league standings, live match scores, match results, and league news.`,
		technologies: ['React', 'SASS', 'Express', 'MongoDB', 'Selenium', 'Jest'],
		website: 'https://premier-ease.vercel.app/',
		github: [
			'https://github.com/louisdoan9/PremierEase',
			'https://github.com/louisdoan9/PremierEase_backend',
		],
		lastUpdated: 2023,
	},
	{
		image: [offcampusMcmaster, offcampusMcmaster2, offcampusMcmaster3, offcampusMcmaster4],
		projectName: 'OffCampus McMaster Clone',
		description: `A clone of McMaster's off-campus housing website. Allows user to upload information about a property and search uploaded properties.`,
		technologies: ['React', 'SASS', 'Express', 'MongoDB'],
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
		technologies: ['React', 'SASS', 'Express', 'Supabase'],
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
		technologies: ['React', 'SASS', 'Express', 'MongoDB'],
		website: 'https://treeter.vercel.app/',
		github: ['https://github.com/louisdoan9/treeter', 'https://github.com/louisdoan9/treeter-api'],
		lastUpdated: 2023,
	},
	{
		image: [connect4fun, connect4fun2],
		projectName: 'Connect4Fun',
		description: `A website that allows users to play Connect 4 with others in real-time.`,
		technologies: ['React', 'SASS', 'Express', 'Supabase'],
		website: 'https://connect4fun.vercel.app/',
		github: ['https://github.com/louisdoan9/Connect4Fun'],
		lastUpdated: 2023,
	},
	{
		image: [ratmaze, ratmaze2],
		projectName: 'Rat Maze',
		description: `A backtracking algorithm where users can find a path from a starting position to the end of an inputted maze.`,
		technologies: ['Java', 'Java Swing'],
		website: '',
		github: ['https://github.com/louisdoan9/ratmaze'],
		lastUpdated: 2024,
	},
	{
		image: [shortestpath, shortestpath2],
		projectName: 'Shortest Path Analysis',
		description: `Collaborated in a team of three to implement, analyze, and compare the shortest path algorithms: Dijkstra's, Bellman-Ford, and A*.`,
		technologies: ['Python'],
		website: '',
		github: ['https://github.com/louisdoan9/shortestPathAnalysis'],
		lastUpdated: 2023,
	},
];

export default Projects;
