import './AboutMe.css';
import selfPicture from '../../images/LouisDoan-transparent.png';

function AboutMe() {
	return (
		<main className="about-me">
			<section className="info">
				<h1>Hey.🫡</h1>
				<p>
					I'm Louis, a passionate and hard-working student hoping to enter the tech field. Growing up as the
					youngest in the family, it was often up to me to deal with all the technical difficulties around the
					house. My first exposure to actual programming was in grade 6 when we had to create a game using the
					language "Scratch" for an assignment. My favorite part was getting that feeling of solving a
					difficult problem and showing off what I created to the class. Ever since then, I knew this was the
					career I wanted to pursue.
				</p>
				<p>
					Currently a 4th year computer science student at McMaster university, I'm constantly being
					introduced to new ideas and overcoming challenging problems. I think my greatest strength is my
					hard-working nature and willingness to learn! Here are the main technologies that I have learned
					about thus far:
				</p>
			</section>
			<section className="image">
				<img src={selfPicture} alt="" srcset="" />
			</section>
		</main>
	);
}

export default AboutMe;
