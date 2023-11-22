import { useEffect, useRef, useState } from "react";
import { useTask } from "../contexts/TaskContext";

export default function EditForm() {
  const {
    handleEditTasks,
    editedTaskId,
    tasks,
    setDisplayEditForm,
    handleDeleteTasks,
    displayEditForm,
  } = useTask();

  const task = tasks.find((task) => task.id === editedTaskId);

  const [description, setDescription] = useState(task?.description);
  const [type, setType] = useState(task?.type);

  function handleSubmit(e) {
    e.preventDefault();
    const editedTask = {
      description,
      type,
      isCompleted: false,
      id: Date.now(),
    };
    if (description === "") {
      alert("Dont add empty task");
      return;
    }
    handleEditTasks(editedTask, editedTaskId);
    handleDeleteTasks(editedTaskId);
    setDisplayEditForm(false);
  }

  if (displayEditForm)
    return (
      <div className="edit-popup">
        <div className="edit-content">
          <h2 className="edit-title">Edit Task</h2>
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
            <button type="submit" className="add-task-btn">
              Save
            </button>
            {/* <button
              type="button"
              className="add-task-btn"
              onClick={() => setDisplayEditForm(false)}
            >
              Cancel
            </button> */}
          </form>
        </div>
      </div>
    );
}
