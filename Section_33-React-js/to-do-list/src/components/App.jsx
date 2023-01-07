import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
	const [items, setItems] = useState([]);

	function addItem(inputText) {
		setItems((prevItem) => {
			return [...prevItem, inputText];
		});
	}

	function deleteItem(id) {
		setItems((prevItem) => {
			return prevItem.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			{/* <div className="form">
				<input
					name="todo"
					onChange={handleChange}
					value={inputText}
					type="text"
				/>
				<button onClick={addItem} type="submit">
					<span>Add</span>
				</button>
			</div> */}
			<InputArea onAdd={addItem} />
			<div>
				<ul>
					{items.map((item, index) => (
						<ToDoItem
							key={index}
							id={index}
							text={item}
							onChecked={deleteItem}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
