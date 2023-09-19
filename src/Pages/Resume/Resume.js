import './Resume.css';
import resumePng from './LouisDoan.png';
import resumePdf from './LouisDoan.pdf';

function Resume() {
	return (
		<main className="resume" id="resume">
			<section>
				<h1>Resume.📄</h1>
				<img src={resumePng} alt="Resume" />
				<a href={resumePdf} download={'LouisDoan.pdf'}>
					Download Resume
				</a>
			</section>
		</main>
	);
}

export default Resume;
