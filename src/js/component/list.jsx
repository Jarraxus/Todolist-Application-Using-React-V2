import React from "react";
import { tasks } from "./tasks";

export const list = () => {
	const todos = ["test"];

    return (
        <ul>
            {todos.map((tasks) => {
                return <list list={tasks} />;
            })}
        </ul>
    );
};
