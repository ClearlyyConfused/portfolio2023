import NavBar from './Pages/NavBar/NavBar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Technologies from './Pages/Technologies/Technologies';
import Projects from './Pages/Project/Projects';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';
import { useEffect, useState } from 'react';

function App() {
	const [light, setLight] = useState(true);
	const [scrollPosition, setScrollPosition] = useState('');

	const handleScroll = () => {
		if (
			window.scrollY + 300 >
			window.scrollY + document.getElementById('contact').getBoundingClientRect().top
		) {
			setScrollPosition('contactSection');
		} else if (
			window.scrollY + 300 >
			window.scrollY + document.getElementById('resume').getBoundingClientRect().top
		) {
			setScrollPosition('resumeSection');
		} else if (
			window.scrollY + 300 >
			window.scrollY + document.getElementById('projects').getBoundingClientRect().top
		) {
			setScrollPosition('projectSection');
		} else if (
			window.scrollY + 300 >
			window.scrollY + document.getElementById('technologies').getBoundingClientRect().top
		) {
			setScrollPosition('techSection');
		} else {
			setScrollPosition('aboutMeSection');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

	return (
		<div
			className={`App light-${light} ${
				scrollPosition === 'resumeSection'
					? 'resumeSection'
					: scrollPosition === 'contactSection'
					? 'contactSection'
					: scrollPosition === 'projectSection'
					? 'projectSection'
					: scrollPosition === 'techSection'
					? 'techSection'
					: scrollPosition === 'aboutMeSection'
					? 'aboutMeSection'
					: ''
			}`}
		>
			<NavBar light={light} setLight={setLight} />
			<AboutMe />
			<Technologies />
			<Projects />
			<Resume />
			<Contact />
		</div>
	);
}

export default App;
