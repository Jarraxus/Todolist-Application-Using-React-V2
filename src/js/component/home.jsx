import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");

	let onChange = (e) => {
		const newValue = e.target.value;
		setInputValue(newValue);
		console.log(newValue);
	};

	let addTask = (e) => {
		if (e.keyCode == 13) {
			setInputValue([inputValue]);
		}
	};
	return (
		<div className="constainer">
			<span className="header">Todo List</span>
			<div className="thelist">
				<input
					className="input"
					placeholder="New Task"
					onChange={onChange}></input>

				<ul>
					<Todo />
					<li>{inputValue}</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
