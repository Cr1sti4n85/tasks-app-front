import useTasks from "../context/useTasks";
import { Props, Task } from "../types/task.type";
import { IoCheckmarkDone, IoTrashOutline } from "react-icons/io5";

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    await deleteTask(id);
  };

  const handleUpdate = async (task: Task) => {
    if (!window.confirm("Are you sure you want to update this task?")) return;
    await updateTask(task._id, { completed: !task.completed });
  };

  return (
    <div
      className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800"
      key={task._id}
    >
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={async () => await handleUpdate(task)}
          className="hover:cursor-pointer"
        >
          {task.completed ? <IoCheckmarkDone /> : "Update"}
        </button>
        <button
          onClick={async () => await handleDelete(task._id)}
          className="hover:cursor-pointer"
        >
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
