import { useTask } from "../contexts/TaskContext";

export default function TaskActions() {
  const { handleClearTask, tasks } = useTask();
  if (tasks.length > 0)
    return (
      <div className="task-actions">
        {/* <div className="filter-container">
              <label className="filter-label">Filter:</label>
              <select
                id="filter-select"
                className="filter-select"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="input">Input</option>
                <option value="completed">Completed</option>
              </select>
            </div> */}
        <button className="clear-btn" onClick={handleClearTask}>
          Clear All Tasks
        </button>
      </div>
    );
}
