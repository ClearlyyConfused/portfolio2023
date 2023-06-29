import './NavBar.css';
import lightMode from '../../images/light-mode.png';
import darkMode from '../../images/dark-mode.png';
import hamburgerIcon from '../../images/Hamburger_icon.svg';
import { useEffect, useState } from 'react';

function NavBar({ light, setLight }) {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [displayDropdown, setDisplayDropdown] = useState(false);
	const [dropdownIndex, setDropdownIndex] = useState(-1);

	// updates screen size on resize
	useEffect(() => {
		if (screenWidth > 495) {
			setDisplayDropdown(false);
		}
		function updateScreen() {
			setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', updateScreen, true);
		return () => {
			window.removeEventListener('resize', updateScreen, true);
		};
	}, [screenWidth]);

	// prevents background scroll when dropdown active
	useEffect(() => {
		let timer1 = setTimeout(() => {
			if (displayDropdown) {
				setDropdownIndex(1);
			}
		}, 100);
		let timer2 = setTimeout(() => {
			if (!displayDropdown) {
				setDropdownIndex(-1);
			}
		}, 500);
		if (displayDropdown) {
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = getScrollBarWidth() + 'px';
			body.style.overflowY = 'hidden';
		} else {
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = '0px';
			body.style.overflowY = 'scroll';
		}

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, [displayDropdown]);

	if (screenWidth > 495) {
		return (
			<nav>
				<button>
					<a href="#projects">PROJECTS</a>
				</button>
				<button>
					<a href="#resume">RESUME</a>
				</button>
				<button>
					<a href="#contact">CONTACT</a>
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
	} else {
		return (
			<nav>
				<button
					onClick={() => {
						setDisplayDropdown(!displayDropdown);
					}}
				>
					<img src={hamburgerIcon} alt="dropdown" />
				</button>
				<div className="dropdown" style={{ opacity: displayDropdown ? 1 : 0, zIndex: dropdownIndex }}>
					<div className="dropdown-button">
						<button
							onClick={() => {
								setDisplayDropdown(false);
							}}
						>
							<a href="#projects">PROJECTS</a>
						</button>
						<button
							onClick={() => {
								setDisplayDropdown(false);
							}}
						>
							<a href="#resume">RESUME</a>
						</button>
						<button
							onClick={() => {
								setDisplayDropdown(false);
							}}
						>
							<a href="#contact">CONTACT</a>
						</button>
						<button>
							<img
								onClick={() => setLight(!light)}
								className={light ? 'light-mode' : 'dark-mode'}
								src={light ? lightMode : darkMode}
								alt={light ? 'light-mode' : 'dark-mode'}
							/>
						</button>
					</div>
				</div>
			</nav>
		);
	}
}

function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = '100%';
	inner.style.height = '200px';

	var outer = document.createElement('div');
	outer.style.position = 'absolute';
	outer.style.top = '0px';
	outer.style.left = '0px';
	outer.style.visibility = 'hidden';
	outer.style.width = '200px';
	outer.style.height = '150px';
	outer.style.overflow = 'hidden';
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 === w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);

	return w1 - w2;
}

export default NavBar;
