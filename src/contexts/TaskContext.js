import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();
function TaskProvider({ children }) {
  function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(
      function () {
        localStorage.setItem(key, JSON.stringify(value));
      },
      [value, key]
    );
    return [value, setValue];
  }

  const [tasks, setTasks] = useLocalStorageState([], "tasks");
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [displayEditForm, setDisplayEditForm] = useState(false);

  function handleAddTasks(task) {
    setTasks([...tasks, task]);
  }

  function handleToggleTasks(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleClearTasks() {
    setTasks([]);
  }

  function handleDeleteTasks(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEditTasks(task, taskId) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    setTasks([...tasks, task]);
    setEditedTaskId(taskId);
    setDisplayEditForm(true);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        editedTaskId,
        setEditedTaskId,
        displayEditForm,
        setDisplayEditForm,
        handleAddTasks,
        handleToggleTasks,
        handleClearTasks,
        handleDeleteTasks,
        handleEditTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("TaskContext is used outside TaskProvider");
  return context;
}

export { TaskProvider, useTask };
