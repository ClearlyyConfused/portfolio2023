import './AboutMe.css';
import sample from '../../images/LouisDoan-transparent.png';

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
				<div className="technologies">
					<img
						src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
						alt="HTML"
					/>
					<img
						src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
						alt="CSS"
					/>
					<img
						src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
						alt="SASS"
					/>
					<img
						src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
						alt="JavaScript"
					/>
					<img
						src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
						alt="TypeScript"
					/>
					<img
						src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
						alt="React"
					/>
					<img
						src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
						alt="NodeJS"
					/>
					<img
						src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
						alt="Express"
					/>
					<img
						src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
						alt="MongoDB"
					/>
					<img
						src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
						alt="SupaBase"
					/>
					<img
						src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
						alt="Jest"
					/>
					<img
						src="https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white"
						alt="Selenium"
					/>
					<img
						src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
						alt="Python"
					/>
					<img
						src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
						alt="Java"
					/>
					<img
						src="https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white"
						alt="Haskell"
					/>
					<img
						src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
						alt="Git"
					/>
					<img
						src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white"
						alt="MS Office"
					/>
				</div>
			</section>
			<section className="image">
				<img src={sample} alt="" srcset="" />
			</section>
		</main>
	);
}

export default AboutMe;
