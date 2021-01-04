import React from "react";
import useWebAnimations, { backInLeft } from "@wellyshen/use-web-animations";

const Welcome = () => {
	const { ref } = useWebAnimations({ ...backInLeft });

	return (
		<div className="welcome">
			<h1 className="cortex">CORTEX</h1>
			<h2 className="copywriter">COPYWRITER</h2>
			<h3 className="welcome-text">Enhance your communications with</h3>
			<h3 className="welcome-text" ref={ref}>
				psychology-based copywriting and
			</h3>
			<h3 className="welcome-text" style={{ paddingBottom: 50 }}>
				UX writing
			</h3>
			<button className="send-btn">Send a message</button>
		</div>
	);
};

export default Welcome;
