import { useTask } from "../contexts/TaskContext";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useTask();
  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <Task task={task} key={i} />
      ))}
    </ul>
  );
}
