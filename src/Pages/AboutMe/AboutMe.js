import './AboutMe.css';
import sample from '../../images/red.png';

function AboutMe() {
	return (
		<main className="about-me">
			<section className="info">
				<h1>Hey.🫡</h1>
				<p>
					I'm Louis, a passionate and motivated student learning web development. Since being introduced to
					programming in grade 6, my unwavering interest in the field continued and I eventually narrowed it
					down to webdev being the field I wanted to enter. Currently a 3rd year computer science student at
					McMaster university, I'm constantly being introduced to new ideas and overcoming challenging
					problems related to the field. Here is a list of the technologies that I am familiar with and use:
				</p>
				<div className="technologies">
					<ul>
						<li>HTML</li>
						<li>CSS/SCSS</li>
						<li>JavaScript/TypeScript</li>
						<li>React</li>
						<li>NodeJS</li>
					</ul>
					<ul>
						<li>Express</li>
						<li>MongoDB</li>
						<li>SQL</li>
						<li>GitHub/Git</li>
					</ul>
				</div>
			</section>
			<section className="image">
				<img src={sample} alt="" srcset="" />
			</section>
		</main>
	);
}

export default AboutMe;
