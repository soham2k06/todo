import { useState } from "react";
import { useTask } from "../contexts/TaskContext";

export default function Form() {
  const { handleAddTasks } = useTask();
  const [description, setDescription] = useState("");
  const [type, setType] = useState("personal");
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      description,
      type,
      isCompleted: false,
      id: Date.now(),
    };
    if (description === "") {
      alert("Dont add empty task");
      return;
    }
    handleAddTasks(newTask);
    setDescription("");
    setType("personal");
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="tag-select"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="shopping">Shopping</option>
        <option value="study">Study</option>
        <option value="other">Other</option>
      </select>
      <button className="add-task-btn">Add Task</button>
    </form>
  );
}
