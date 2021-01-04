import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Welcome />
			<Services />
			<About />
			<Footer />
		</>
	);
}

export default App;
