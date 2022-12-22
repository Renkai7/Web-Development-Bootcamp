import React from "react";
import pi, { doublePi, triplePi } from "./math";
import { add, subtract, multiply, divide } from "./calculator";

function List() {
	return (
		<ul>
			<li>{pi}</li>
			<li>{doublePi()}</li>
			<li>{triplePi()}</li>
			<li>{add(1, 2)}</li>
			<li>{multiply(2, 3)}</li>
			<li>{subtract(7, 2)}</li>
			<li>{divide(5, 2)}</li>
		</ul>
	);
}

export default List;
