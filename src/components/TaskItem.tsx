import useTasks from "../context/useTasks";
import { Props, Task } from "../types/task.type";
import { IoCheckmarkDone, IoTrashOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

function TaskItem({ task }: Props) {
  const { deleteTask, selectTask, updateTask } = useTasks();

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    await deleteTask(id);
  };

  const handleUpdate = async (task: Task) => {
    selectTask(task);
  };

  const handleCompletedTask = async (task: Task) => {
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
      <div className="flex gap-x-2 items-center">
        {task.completed ? (
          <IoCheckmarkDone
            className="hover:cursor-pointer text-green-500"
            onClick={async () => await handleCompletedTask(task)}
          />
        ) : (
          <button
            onClick={async () => await handleCompletedTask(task)}
            className="hover:cursor-pointer border-2 border-gray-500 p-1 rounded-lg"
          >
            Done
          </button>
        )}

        {task.completed ? null : (
          <FaEdit
            onClick={async () => await handleUpdate(task)}
            className="hover:cursor-pointer"
          />
        )}

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
