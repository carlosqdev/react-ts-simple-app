import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task.interface";
import logo from "./logo.svg";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React and TypeScript",
      description: "The best way to learn React",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed: false}]);

  const deleteATask = (id: number) => setTasks(tasks.filter(task => task.id !== id));


  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
          {title}
        </a>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
