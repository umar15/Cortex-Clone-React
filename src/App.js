import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import About from "./components/About";
import Samples from "./components/Samples";

function App() {
	return (
		<>
			<Navbar />
			<Welcome />
			<Services />
			<About />
			<Samples />
		</>
	);
}

export default App;
