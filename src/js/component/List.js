import React, { useState } from "react";
import { Task } from "./Task";

export const List = () => {
	const [task, setTask] = useState("");
	const [listedItems, setListedItems] = useState([]);

	const Add = (e) => {
		if (e.keyCode == 13) {
			setListedItems([...listedItems, task.trim()]);
			setTask("");
		}
	};

	// const Remove = () => {
	// 	console.log("It's Working");
	// };

	return (
		<div className="form-body border">
			<h1 className="header text-center">Jarraxus' Todo List</h1>
			<div className="form-input border">
				<input
					className="form"
					type="text"
					placeholder="What needs to be done?"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyUp={Add}
				/>
				<div className="listed-items">
					{/* insert <li>'s here */}
					<small className="task-amount">
						<em>{listedItems.length}</em>
					</small>
				</div>
			</div>
		</div>
	);
};
