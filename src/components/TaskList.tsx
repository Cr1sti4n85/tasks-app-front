import { useEffect, useState } from "react";
import { getTasks } from "../api/tasks";
import { Task } from "../types/task.type";
import TaskItem from "./TaskItem";

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
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
