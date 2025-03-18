import { Task } from "../types/task.type";

const API = "http://localhost:3000";

const createTaks = (task: Task) => {
  return fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export { createTaks };
