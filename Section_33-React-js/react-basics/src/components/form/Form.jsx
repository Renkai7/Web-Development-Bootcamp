import React, { useState } from "react";
import "./Form.css";

function Form() {
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: "",
	});

	function handleChange(event) {
		// const newValue = event.target.value;
		// const inputName = event.target.name;

		const { value, name } = event.target;

		// setContact((prevValue) => {
		// 	if (event.target.name === "fName") {
		// 		return {
		// 			fName: value,
		// 			lName: prevValue.lName,
		// 			email: prevValue.email,
		// 		};
		// 	} else if (name === "lName") {
		// 		return {
		// 			fName: prevValue.fName,
		// 			lName: value,
		// 			email: prevValue.email,
		// 		};
		// 	} else if (name === "email") {
		// 		return {
		// 			fName: prevValue.fName,
		// 			lName: prevValue.lName,
		// 			email: value,
		// 		};
		// 	}
		// });

		setContact((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	return (
		<div className="container">
			<h1>
				Hello, {contact.fName} {contact.lName}
			</h1>
			<p>{contact.email}</p>
			<form>
				<input
					name="fName"
					onChange={handleChange}
					placeholder="First Name"
					value={contact.fName}
				/>
				<input
					name="lName"
					onChange={handleChange}
					placeholder="Last Name"
					value={contact.lName}
				/>
				<input
					onChange={handleChange}
					name="email"
					placeholder="Email"
					value={contact.email}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Form;
