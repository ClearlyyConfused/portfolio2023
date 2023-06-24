import NavBar from './Pages/NavBar/NavBar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Project/Projects';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';

function App() {
	return (
		<div className="App">
			<NavBar />
			<AboutMe />
			<Projects />
			<Resume />
			<Contact />
		</div>
	);
}

export default App;
