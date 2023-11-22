import { useTask } from "../contexts/TaskContext";

export default function Task({ task }) {
  const { handleToggleTasks, handleDeleteTasks, handleEditTasks } = useTask();
  return (
    <li className={task.isCompleted ? "completed-task" : ""}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => handleToggleTasks(task.id)}
        />
        <span className={`task-tag ${task.type}`}>{task.type}</span>
      </div>
      <span className="task-description">{task.description}</span>
      <div>
        {!task.isCompleted && (
          <button
            className="edit-btn"
            onClick={() => handleEditTasks(task, task.id)}
          >
            Edit Task
          </button>
        )}
        <button
          className="delete-btn"
          onClick={() => handleDeleteTasks(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
