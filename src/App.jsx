import { useEffect, useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const initialArr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editableIndex, setEditableIndex] = useState(null);

  const updateTask = (index) => {
    setEditableIndex(index);
    setTitle(task[index].title);
    setDescription(task[index].description);
  };

  const deleteTask = (index) => {
    const filteredArr = task.filter((value, i) => {
      return i !== index;
    });
    setTask(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const submission = (e) => {
    // e.preventDefault(
    //   setTask(
    //     [...task, { title, description }],
    //     setTitle(""),
    //     setDescription("")
    //   )
    // );
    e.preventDefault();

    if (editableIndex !== null) {
      // Update existing task
      const updatedTasks = [...task];
      updatedTasks[editableIndex] = { title, description };
      setTask(updatedTasks);
      setEditableIndex(null);
    } else {
      // Add new task
      setTask([...task, { title, description }]);
    }

    setTitle("");
    setDescription("");
  };

  // console.log([...task, { title, description }]);

  return (
    <div>
      <Header />
      <h1>Daily Goals</h1>
      <form onSubmit={submission} className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="desc"
          id="desc"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">
          {editableIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {task.map((item, index) => (
        <Tasks
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
          startEdits={updateTask}
        />
      ))}
    </div>
  );
}

export default App;
