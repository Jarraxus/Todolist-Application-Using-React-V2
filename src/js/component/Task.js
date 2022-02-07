import React from "react";

export const Task = (props) => {
	return (
		<li id={props.id} className="listed-tasks">
			{props.task}
			<span classNAme="delete">
				<i className="far fa-trash"></i>
			</span>
		</li>
	);
};
