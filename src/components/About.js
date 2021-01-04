import React from "react";
import about from "./images/about.jpg";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const About = () => {
	const { ref } = useWebAnimations({ ...bounce });

	return (
		<div className="about">
			<div className="about-img">
				<img src={about} alt="about" className="image-about" />
				<p>Nathan Mudaliar, the Cortex Copywriter</p>
			</div>
			<div className="about-text">
				<h1 className="about-heading" ref={ref}>
					About
				</h1>
				<p className="about-para">
					My copywriting and UX writing draws on abilities developed in the{" "}
					<br />
					psychological sciences.
				</p>
				<p className="about-para">
					Expertise in visual perception, behavioral motivation, and
					<br />
					decision-making allows me to engineer words that convert
					<br />
					customers and guide users.
				</p>
			</div>
		</div>
	);
};

export default About;
