import React, { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

export const TaskContext = createContext({
  tasks: [],
});

export const TaskProvider: React.FC<ContextProps> = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
