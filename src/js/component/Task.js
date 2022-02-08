import PropTypes from "prop-types";
import React from "react";

export const Task = (props) => {
	return (
		<li className="listed-tasks">
			{props.task}
			<i
				className="delete fa fa-trash"
				onClick={() => props.remove(props.ind)}></i>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.string,
	remove: PropTypes.func,
	ind: PropTypes.number,
};
