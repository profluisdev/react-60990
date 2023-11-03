import { useState } from "react"
import { FormInput } from "../FormInput/FormInput"
import { Task } from "../Task/Task"

export const TaskListContainer = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = ( task ) => {
        setTasks([...tasks, task]);
     }

    const handleChangeStatus = (id) => { 
        const index = tasks.findIndex( task => task.id === id);
        tasks[index].status = !tasks[index].status; 
        setTasks([...tasks]); 
     }

  return (
    <div className="d-flex flex-column col-6">
      <FormInput addTask={handleAddTask} />
      { tasks.map( task => <Task key={task.id} {...task} changeStatus={handleChangeStatus} />) }
    </div>
  )
}
