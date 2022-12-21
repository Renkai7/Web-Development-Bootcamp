import React from "react";

const time = new Date().getHours();
let greeting = "";

const customStyle = {
	color: "red",
	// fontSize: "20px",
	// border: "1px solid black",
};

if (time >= 18) {
	greeting = "Evening";
	customStyle.color = "blue";
} else if (time >= 12) {
	greeting = "Afternoon";
	customStyle.color = "green";
} else {
	greeting = "Morning";
	customStyle.color = "red";
}

function Greeting() {
	return <h1 style={customStyle}>Good {greeting}!</h1>;
}

export default Greeting;
