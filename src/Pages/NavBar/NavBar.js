import './NavBar.css';
import lightMode from '../../images/light-mode.png';
import darkMode from '../../images/dark-mode.png';
import { useState } from 'react';

function NavBar() {
	const [light, setLight] = useState(true);

	return (
		<nav>
			<button>
				<a href="#projects">Projects</a>
			</button>
			<button>
				<a href="#resume">Resume</a>
			</button>
			<button>
				<a href="#contact">Contact</a>
			</button>
			<div className="img-container">
				<button>
					<img
						onClick={() => setLight(!light)}
						className={light ? 'light-mode' : 'dark-mode'}
						src={light ? lightMode : darkMode}
						alt={light ? 'light-mode' : 'dark-mode'}
					/>
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
