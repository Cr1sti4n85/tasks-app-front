import React, { createContext, useEffect, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTasks } from "../api/tasks";
import { Task, TasksContext, CreatedTask } from "../types/task.type";

interface ContextProps {
  children: React.ReactNode;
}

export const TaskContext = createContext<TasksContext>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
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

  const createTask = async (task: CreatedTask) => {
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id: string) => {
    const res = await deleteTaskRequest(id);
    if (res.status === 204) {
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
