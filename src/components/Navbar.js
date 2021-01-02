import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
	return (
		<div style={navbar}>
			<div style={textStyles}>
				<h4>Switch Experience</h4>
				<ArrowDropDownIcon />
			</div>
			<div style={menubtn}>
				<MenuIcon />
			</div>
		</div>
	);
};

const navbar = {
	display: "flex",
	flexDirection: "row",
	backgroundColor: "rgb(15 5 76)",
	color: "white",
	padding: 18,
	fontSize: 20,
	alignItems: "center",
	justifyContent: "space-between",
	boxShadow: "0 0 10px grey",
};

const menubtn = {
	color: "white",
};

const textStyles = {
	marginLeft: "45%",
	display: "flex",
	flexDirection: "row",
};

export default Navbar;
