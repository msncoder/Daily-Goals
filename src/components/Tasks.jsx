import React from "react";

function Tasks({ title, description, deleteTask, index }) {
  return (
    <div className="tasks">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default Tasks;
