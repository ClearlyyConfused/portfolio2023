import './Technologies.css';

function Technologies() {
	return (
		<main className="technologies" id="technologies">
			<h1>Technologies. 🛠️</h1>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
						alt="HTML"
						title="HTML"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
						alt="CSS"
						title="CSS"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
						alt="JavaScript"
						title="JavaScript"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
						alt="React"
						title="React"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
						alt="SASS"
						title="SASS"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
						alt="TypeScript"
						title="TypeScript"
					/>
				</div>
				<p>
					For the frontend, I use HTML, CSS, and JavaScript. I incorporate SASS and TypeScript when needed for
					more maintainable code. React is my framework of choice for its intuitiveness and ability to speed
					up development.
				</p>
			</section>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
						alt="NodeJS"
						title="NodeJS"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
						alt="Express"
						title="Express"
					/>
				</div>
				<p>
					On the backend, I use Node.js/Express to create REST APIs. Endpoints are created for HTTP methods
					like GET and POST so that the frontend can interact with the database.
				</p>
			</section>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
						alt="MongoDB"
						title="MongoDB"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original-wordmark.svg"
						alt="Supabase"
						title="Supabase"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
						alt="SQL"
						title="SQL"
					/>
				</div>
				<p>
					For databases, I prefer MongoDB for its simplicity in most projects, while Supabase is used for
					real-time data access when needed. My SQL experience, gained from McMaster's database course,
					includes writing complex queries and database creation.
				</p>
			</section>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
						alt="Python"
						title="Python"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
						alt="Java"
						title="Java"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
						alt="C"
						title="C"
					/>
				</div>
				<p>
					Additionally, at McMaster, I gained proficiency in Python, Java, and C, covering the fundamentals to
					advanced algorithms such as shortest path and backtracking in Python and Java, and exploring
					low-level processes like forking and kernel modules in C.
				</p>
			</section>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg"
						alt="Haskell"
						title="Haskell"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prolog/prolog-original-wordmark.svg"
						alt="Prolog"
						title="Prolog"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original-wordmark.svg"
						alt="WebAssembly"
						title="WebAssembly"
					/>
				</div>
				<p>
					I also studied Haskell, Prolog, and WebAssembly. While niche, this expanded my understanding of
					language design and showcases my commitment to learning new things.
				</p>
			</section>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
						alt="Jest"
						title="Jest"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg"
						alt="JUnit"
						title="JUnit"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
						alt="Selenium"
						title="Selenium"
					/>
				</div>

				<p>
					For quality assurance, I use Jest/JUnit for creating test suites in their respective languages. For
					end-to-end testing of web pages, I use Selenium to test general user actions like navigation,
					account creation, and login.
				</p>
			</section>
			<section className="technologies-group">
				<div className="technologies-images">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
						alt="GitHub"
						title="Github"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
						alt="Git"
						title="Git"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg"
						alt="MS Office"
						title="MS Office"
					/>
				</div>
				<p>
					Regarding miscellaneous technologies, I use GitHub and Git for version control across all my
					projects. At McMaster, I utilized the Microsoft Office Suite extensively for tasks such as writing
					reports/essays, presenting information, and handling data.
				</p>
			</section>
		</main>
	);
}

export default Technologies;
