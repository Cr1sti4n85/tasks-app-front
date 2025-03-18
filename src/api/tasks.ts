import { CreatedTask } from "../types/task.type";

const API = "http://localhost:3000/api";

const createTaks = (task: CreatedTask) => {
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

export { createTaks, getTasks };
