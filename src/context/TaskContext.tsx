import React, { createContext, useEffect, useState } from "react";
import { getTasks } from "../api/tasks";
import { Task, TasksContext } from "../types/task.type";

interface ContextProps {
  children: React.ReactNode;
}

export const TaskContext = createContext<TasksContext>({
  tasks: [],
});

export const TaskProvider: React.FC<ContextProps> = ({ children }) => {
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
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
