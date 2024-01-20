import { useState } from "react";

const Main = () => {
  const [inputTask, setInputTask] = useState("");
  const [ListTask, setListTask] = useState([]);

  console.log("Losta de tareas", ListTask);

  const AddTodoList = () => {
    // let newList = ListTask;
    // newList.push(inputTask);
    // setListTask(newList);
    setListTask((ListTask) => [...ListTask, inputTask]);

    setInputTask("");
  };

  return (
    <>
      <h1>TodoList</h1>
      <input
        className="addTodoList"
        placeholder="Agregar tarea"
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button onClick={AddTodoList} className="btn-todolist">
        Crear Tarea
      </button>

      <div className="boxTarea">
        <ul>
          {ListTask.map((item, index) => (
            <li className="itemTask" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="footerTodolist">
        <span>Total: {ListTask.length}</span>
        <button onClick={() => setListTask((ListTask) => [])}>
          Eliminar Tareas
        </button>
      </div>
    </>
  );
};

export default Main;
