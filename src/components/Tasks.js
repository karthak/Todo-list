import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./Tasks.css";

const Tasks = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskAdder = (event) => {
    setEnteredTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const task = { nameOfTask: enteredTask, cDate: new Date() };
    props.onAddTask(task);
    setEnteredTask("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div id="title">
        <div>
          <input
            className="input-field"
            type="text"
            placeholder="Enter the Task"
            value={enteredTask}
            onChange={taskAdder}
          />
          <Button className="btn-dark btn-sm" type="submit">
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Tasks;
