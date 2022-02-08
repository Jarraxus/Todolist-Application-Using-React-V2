import React, { useState } from "react";
import { render } from "react-dom";
import { Task } from "./Task";

export const List = () => {
	const [task, setTask] = useState("");
	const [listedItems, setListedItems] = useState([]);

	const Add = (e) => {
		if (e.keyCode == 13 && e.target.value != "") {
			setListedItems([...listedItems, task]);
			setTask("");
		}
	};

	const Remove = (index) => {
		let filteredArray = listedItems.filter((item, i) => i != index);
		setListedItems(filteredArray);
	};

	const Counter = () => {
		if (listedItems.length > 1) {
			return `${listedItems.length}` + " items left on your list";
		} else if (listedItems.length > 0) {
			return "1 item left on your list";
		} else {
			return "No tasks, add a task";
		}
	};

	return (
		<div className="form-body border">
			<h1 className="header text-center">Jarraxus' Todo List</h1>
			<div className="form-input">
				<input
					className="form"
					type="text"
					placeholder="What needs to be done?"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyUp={Add}
				/>
				<div className="listed-items">
					<ul>
						{listedItems.map((item, index) => (
							<Task
								ind={index}
								key={index}
								task={item}
								remove={Remove}
							/>
						))}
					</ul>
				</div>
				<div>
					<em className="counter">
						<Counter />
					</em>
				</div>
			</div>
		</div>
	);
};
