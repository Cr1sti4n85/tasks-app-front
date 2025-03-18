export type Task = {
  _id: string;
  title: string;
  description?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type CreatedTask = Omit<Task, "_id" | "createdAt" | "updatedAt">;
