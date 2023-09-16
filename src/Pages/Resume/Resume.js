import './Resume.css';
import resumePng from './louisdoan2023.png';
import resumePdf from './louisdoan2023.pdf';

function Resume() {
	return (
		<main className="resume" id="resume">
			<section>
				<h1>Resume.📄</h1>
				<img src={resumePng} alt="Resume" />
				<a href={resumePdf} download={'LouisDoan'}>
					Download Resume
				</a>
			</section>
		</main>
	);
}

export default Resume;
