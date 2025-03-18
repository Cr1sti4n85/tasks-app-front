import { Props } from "../types/task.type";

function TaskItem({ task }: Props) {
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
        <button className="hover:cursor-pointer">Update</button>
        <button className="hover:cursor-pointer">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
