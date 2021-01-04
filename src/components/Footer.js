import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
	return (
		<div className="footer ">
			<div className="social-icons">
				<FacebookIcon />
				<InstagramIcon className="instagram" />
				<TwitterIcon />
			</div>
			<div>
				© Cortex Copywriter 2021 | ABN 341 1599 0520
				<br />
				Interaction Design + Code by Liam Key
			</div>
		</div>
	);
};

export default Footer;
