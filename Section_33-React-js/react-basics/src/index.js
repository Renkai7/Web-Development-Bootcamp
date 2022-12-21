import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// variables
// const fName = "Ren";
// const lName = "Tsukino";
// const number = 7;
// const year = new Date().getFullYear();

const time = new Date().getHours();
let greeting = "";

// const img = "https://picsum.photos/id/237/200/300";

const customStyle = {
	color: "red",
	// fontSize: "20px",
	// border: "1px solid black",
};

customStyle.color = "blue";

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

root.render(
	// <div>
	// 	<h1>Hello World!</h1>
	// 	<p>This is a paragraph.</p>
	// </div>

	// Display a h1 heading
	// Display unordered list
	// Display 3 list elements
	// <div>
	// 	<h1>List of Items</h1>
	// 	<ul>
	// 		<li>Item 1</li>
	// 		<li>Item 2</li>
	// 		<li>Item 3</li>
	// 	</ul>
	// </div>

	// Using Variables
	// <div>
	// 	<h1>
	// 		Hello {fName} {lName}!
	// 	</h1>
	// 	<p>Your lucky number is {number}</p>
	// </div>

	// Expression in JSX practice
	// <div>
	// 	<p>
	// 		Created by {fName} {lName}.
	// 	</p>
	// 	<p>Copyright {year}.</p>
	// </div>

	// Styling Basics
	// <div>
	// 	<h1 className="heading">Dog</h1>
	// 	<div>
	// 		<img alt="ramen" src={img + "?grayscale"} />
	// 		{/* <img alt="ramen" className="food-img" src={img + "?grayscale"} /> */}
	// 		<img alt="ramen" src={img} />
	// 	</div>
	// 	{/* inline styling */}
	// 	<h1 style={customStyle}>Hello World!</h1>
	// </div>

	<div>
		<h1 style={customStyle} className="heading">
			Good {greeting}!
		</h1>
	</div>
);
