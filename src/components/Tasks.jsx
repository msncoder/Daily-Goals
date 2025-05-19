import React from "react";

function Tasks({ title, description, deleteTask, index, startEdits }) {
  return (
    <div className="tasks">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => startEdits(index)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Tasks;
