import React, { useState, useEffect } from "react";

export const List = () => {
	const [task, setTask] = useState("");
	const [listedItems, setListedItems] = useState([]);
	let url = "https://assets.breatheco.de/apis/fake/todos/user/Jarraxus"; // setting the API url as a variable

	// running getList() on page load
	useEffect(() => {
		getList();
	}, []); // <- ONLY on page load

	function getList() {
		fetch(url, { method: "GET" })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setListedItems(data);
			})
			.catch((error) => {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	function updateAPI(updatedList) {
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(updatedList),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log("This is the data", data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	}

	const Add = (e) => {
		if (e.keyCode == 13 && e.target.value != "") {
			let newTodos = [...listedItems, { label: task, done: false }];
			setListedItems(newTodos);
			updateAPI(newTodos);
			setTask("");
		}
	};

	const Remove = (index) => {
		let filteredArray = listedItems.filter((item, i) => i != index);
		setListedItems(filteredArray);
		updateAPI(filteredArray);
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
							<li className="listed-tasks" key={index}>
								{item.label}
								<i
									className="delete fa fa-trash"
									onClick={() => Remove(index)}></i>
							</li>
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
