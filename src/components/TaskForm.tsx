import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CreatedTask } from "../types/task.type";
import useTasks from "../context/useTasks";

function TaskForm() {
  const [task, setTask] = useState<CreatedTask>({
    title: "",
    description: "",
    completed: false,
  });

  const { createTask, updateTask, selectedTask, clearSelectedTask } =
    useTasks();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedTask) {
      updateTask(selectedTask._id, task);
    } else {
      createTask(task);
      setTask({
        title: "",
        description: "",
        completed: false,
      });
    }
    clearSelectedTask();
  };

  useEffect(() => {
    if (selectedTask) {
      setTask({
        title: selectedTask.title,
        description: selectedTask.description,
        completed: selectedTask.completed,
      });
    } else {
      setTask({
        title: "",
        description: "",
        completed: false,
      });
    }
  }, [selectedTask]);

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
          onChange={handleChange}
          value={task.description}
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
          {selectedTask ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
