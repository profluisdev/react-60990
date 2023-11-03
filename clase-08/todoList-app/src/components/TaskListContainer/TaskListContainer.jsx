import { useEffect, useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Task } from "../Task/Task";
import { useLS } from "../../hooks/useLS";
import { deleteTasks, getTasks, postTasks, putTasks } from "../../api/tasks";

export const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);

  // const {} = useLS("tasks", tasks, setTasks);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    postTasks(task);
  };

  const handleChangeStatus = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].status = !tasks[index].status;
    setTasks([...tasks]);
    putTasks(id, tasks[index]);
  };

  const handleDeleteTask = (id) => {
    const tasksFilter = tasks.filter((task) => task.id !== id);
    setTasks(tasksFilter);
    deleteTasks(id);
  };

  useEffect(() => {
    getTasks()
      .then((resp) => setTasks(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex flex-column col-6">
      <FormInput addTask={handleAddTask} />
      {tasks.map((task) => (
        <Task key={task.id} {...task} changeStatus={handleChangeStatus} deleteTask={handleDeleteTask} />
      ))}
    </div>
  );
};
