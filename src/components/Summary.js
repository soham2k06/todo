import { useTask } from "../contexts/TaskContext";

export default function Summary() {
  const { tasks } = useTask();
  const totalTasks = tasks.length;
  const numCompleted = tasks.filter((task) => task.isCompleted).length;
  const percentage = Math.round((numCompleted / totalTasks) * 100);

  return (
    <div className="summary">
      {totalTasks === 0 ? (
        "Your added task will show up here..."
      ) : (
        <>
          <p className="summary-text">
            Total tasks: <span>{totalTasks}</span>
          </p>
          <p className="completed-tasks">
            You have completed{" "}
            <span className="completed-count">
              {percentage === 100
                ? "every"
                : `${numCompleted} (${!percentage ? 0 : percentage}%)`}
            </span>{" "}
            tasks
          </p>
        </>
      )}
    </div>
  );
}
