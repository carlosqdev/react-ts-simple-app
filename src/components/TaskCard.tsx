import { Task } from "../interfaces/Task.interface";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export default function TaskCard({task, deleteATask}: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button onClick={() => task.id && deleteATask(task.id)} className="btn btn-danger">Delete</button>
    </div>
  );
}