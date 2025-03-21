export type Task = {
  _id: string;
  title: string;
  description?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type CreatedTask = Omit<Task, "_id" | "createdAt" | "updatedAt">;

export interface Props {
  task: Task;
}

export interface TasksContext {
  tasks: Task[];
  createTask: (task: CreatedTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: Partial<Task>) => Promise<void>;
}
