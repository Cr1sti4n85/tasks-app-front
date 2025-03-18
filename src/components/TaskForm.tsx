import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../types/task.type";
import { createTaks } from "../api/tasks";

function TaskForm() {
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createTaks(task);
    const data = res.json();
    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          name="description"
          rows={3}
          placeholder="Write a description"
        ></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            name="completed"
            className="h-5 w-5 text-indigo-600"
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
          <span>Done</span>
        </label>
        <button className="bg-indigo-500 px-3 py-2 w-full rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
