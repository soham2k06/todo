import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";
import Summary from "./components/Summary";
import TaskActions from "./components/TaskActions";
import { TaskProvider } from "./contexts/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <div className="todo-app">
        <Header />
        <Form />
        <TaskList />
        <EditForm />
        <Summary />
        <TaskActions />
      </div>
    </TaskProvider>
  );
}
