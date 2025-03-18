import { useEffect, useState } from "react";
import { getTasks } from "../api/tasks";
import { Task } from "../types/task.type";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function get() {
      const res = await getTasks();
      const data = await res.json();
      setTasks(data);
    }

    get();
  }, []);

  return (
    <div>
      {tasks.map((t) => (
        <div key={t._id}>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
