import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import "./App.css";

const tasks = [];

const App = () => {
  const [enteredTask, setEnteredTask] = useState(tasks);

  const addTaskHandler = (task) => {
    setEnteredTask((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const taskRemover = (i) => {
    setEnteredTask((prevTasks) => {
      return [...prevTasks.slice(0, i), ...prevTasks.slice(i + 1)];
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <h2 className="brand">TO-DO LIST</h2>
        <Tasks onAddTask={addTaskHandler} />
      </div>
      <div className="card row col-names">
        <h7 className="col-lg-6">Task</h7>
        <h7 className="col-lg-4">Date, Time added</h7>
      </div>
      {enteredTask.map((task, i) => {
        return (
          <div className="card row">
            <div className="col-lg-6">{task.nameOfTask}</div>
            <div className="col-lg-4">{task.cDate.toLocaleString()} </div>
            <Button
              className="col-lg-2 btn-sm btn-dark"
              onClick={() => taskRemover(i)}
            >
              {" "}
              Remove{" "}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
