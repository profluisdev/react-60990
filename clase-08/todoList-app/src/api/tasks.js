
export const getTasks = async () => {
    try {
      const resp = await fetch("http://localhost:3000/tasks");
      const data = await resp.json();
      return data;
  } catch (error) {
      console.log(error);
    }
  };

  export const postTasks = async (task) => {
    try {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  export const putTasks = async (id, task) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteTasks = async (id) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      
    } catch (error) {
      console.log(error);
    }
  };