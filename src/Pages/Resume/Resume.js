import './Resume.css';
import resumePng from './ResumeV1.png';
import resumePdf from './ResumeV1.pdf';

function Resume() {
	return (
		<main className="resume" id="resume">
			<section>
				<h1>Resume.📄</h1>
				<img src={resumePng} alt="Resume" />
				<a href={resumePdf} download={'Resume'}>
					Download Resume
				</a>
			</section>
		</main>
	);
}

export default Resume;
