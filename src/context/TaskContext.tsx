import React, { createContext, useEffect, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasks,
  updateTaskRequest,
} from "../api/tasks";
import { Task, TasksContext, CreatedTask } from "../types/task.type";

interface ContextProps {
  children: React.ReactNode;
}

export const TaskContext = createContext<TasksContext>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
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

  const updateTask = async (id: string, task: Partial<Task>) => {
    const res = await updateTaskRequest(id, task);
    const data = await res.json();

    if (res.status === 200) {
      setTasks(
        tasks.map((task) => (task._id === id ? { ...task, ...data } : task))
      );
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
