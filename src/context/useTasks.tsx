import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const useTasks = () => {
  const { tasks } = useContext(TaskContext);
  if (!tasks) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return tasks;
};

export default useTasks;
