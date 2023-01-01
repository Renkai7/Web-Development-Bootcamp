import React from "react";
import Input from "./Input";

function Login(props) {
	return (
		<form className="form">
			<Input type="text" placeholder="Username" />
			<Input type="password" placeholder="Password" />
			{/* hide confirm password if user is logging in and not signing up */}
			{props.isRegistered === false && (
				<Input type="password" placeholder="Confirm Password" />
			)}
			{/* change button text depending on if user is registered or not */}
			<button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
		</form>
	);
}

export default Login;
