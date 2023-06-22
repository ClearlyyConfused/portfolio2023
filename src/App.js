import NavBar from './Pages/NavBar/NavBar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Project/Projects';
import { useState } from 'react';

function App() {
	const [opacity, setOpacity] = useState(1);

	return (
		<div className="App">
			<div className="App-overlay">
				<NavBar />
				<AboutMe />
				<Projects />
			</div>
		</div>
	);
}

export default App;
