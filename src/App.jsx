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
    e.preventDefault(
      setTask(
        [...task, { title, description }],
        setTitle(""),
        setDescription("")
      )
    );
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
        <button type="submit">Add</button>
      </form>

      {task.map((item, index) => (
        <Tasks
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
