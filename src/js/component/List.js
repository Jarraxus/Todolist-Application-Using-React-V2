import React, { useState, useEffect } from "react";
import { Task } from "./Task";

export const List = () => {
	const [task, setTask] = useState("");
	const [listedItems, setListedItems] = useState([]);
	let url = "https://assets.breatheco.de/apis/fake/todos/user/Jarraxus"; // setting the API url as a variable

	// running getList() on page load
	useEffect(() => {
		getList();
	}, []); // <- ONLY on page load

	function getList() {
		fetch(url) // calling the URL variable
			.then((response) => {
				// checking if response is ok. If not, sending Error code
				if (!response.ok) {
					throw Error(response.statusText);
				} // if response good, read the response
				return response.json(); // Read the response as json.
			})
			.then((responseAsJson) => {
				// Do stuff with the JSONified response
				let result = [];
				for (var i in responseAsJson) result.push([responseAsJson[i]]);
				console.log("this is the response", responseAsJson);
				console.log("this is the result", result);
				setListedItems(result); // setting the listedItems as the responseAsJson we imported - currently broke as hell

				console.log("this is the list", listedItems);
			})
			.catch((error) => {
				console.log("Looks like there was a problem: \n", error);
			});
	}

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
