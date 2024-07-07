import './AboutMe.css';
import selfPicture from '../../images/LouisDoan-transparent.png';

function AboutMe() {
	return (
		<main id="about-me">
			<section className="info">
				<h1 className="underline-animation">Hey.</h1>
				<p>
					I'm <strong>Louis</strong>, a <strong>passionate</strong> and <strong>hard-working</strong> student
					aiming to enter the tech field. My first exposure to programming was in grade 6 when we had to
					create a game using the language "Scratch". My favorite part was getting that feeling of{' '}
					<strong>solving a difficult problem</strong> and <strong>showing my peers</strong> what I created.
					Since then, I knew this was the career I wanted to pursue.
				</p>
				<p>
					Currently a 4th year computer science student at <strong>McMaster</strong> university, I'm
					constantly learning new things. I think my greatest strength is my <strong>hard-working</strong>{' '}
					nature and <strong>eagerness to learn</strong>!
				</p>
			</section>
			<section className="image">
				<img src={selfPicture} alt="" srcset="" />
			</section>
		</main>
	);
}

export default AboutMe;
