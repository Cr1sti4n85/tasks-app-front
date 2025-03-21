import { CreatedTask, Task } from "../types/task.type";

const API = "http://localhost:3000/api";

const createTaskRequest = (task: CreatedTask) => {
  return fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

const getTasks = () => {
  return fetch(`${API}/tasks`);
};

const updateTaskRequest = (id: string, task: Partial<Task>) => {
  return fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

const deleteTaskRequest = (id: string) => {
  return fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
  });
};

export { createTaskRequest, getTasks, deleteTaskRequest, updateTaskRequest };
