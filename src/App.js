import NavBar from './Pages/NavBar/NavBar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Technologies from './Pages/Technologies/Technologies';
import Projects from './Pages/Project/Projects';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';
import { useState } from 'react';

function App() {
	const [light, setLight] = useState(true);

	return (
		<div className={`App light-${light}`}>
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
