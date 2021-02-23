import "./styles.css";
import TodoContainer from "./components/TodoContainer.js";
import CreateTodo from "./components/CreateTodo.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [haveToRender, setHaveToRender] = useState(true);

  useEffect(() => {
    if (haveToRender) {
      const promise = axios("https://todos-academlo.herokuapp.com/api/todos");
      promise.then((res) => {
        setToDos(res.data.todos);
        setHaveToRender(false);
      });
    }
  }, [haveToRender]);

  // Create

  const [newToDo, setNewToDo] = useState(null);

  const create = (data) => {
    setNewToDo(data);
  };

  useEffect(() => {
    if (newToDo) {
      const promise = axios.post(
        `https://todos-academlo.herokuapp.com/api/todo`,
        newToDo
      );
      promise.then(() => {
        setNewToDo(null);
        setHaveToRender(true);
      });
    }
  }, [newToDo]);

  // Delete
  const [idToDelete, setIdToDelete] = useState(null);

  const handleDelete = (id) => {
    setIdToDelete(id);
  };

  useEffect(() => {
    if (idToDelete) {
      const res = axios.delete(
        `https://todos-academlo.herokuapp.com/api/todo/${idToDelete}`
      );
      res.then(() => {
        setIdToDelete(null);
        setHaveToRender(true);
      });
    }
  }, [idToDelete]);

  // Update
  const [update, setUpdate] = useState(null);

  const handleUpdate = (data) => {
    setUpdate(data);
  };

  useEffect(() => {
    if (update) {
      console.log(update);
      setUpdate(null);
      setHaveToRender(true);
      // const promise = axios.put(`https://todos-academlo.herokuapp.com/api/todo/${update.id}`, update);
      // promise.then(res => console.log('Me actualicé'));
    }
  }, [update]);

  return (
    <>
      <CreateTodo create={create} />
      <div className="container">
        <h2 style={{ color: "white" }}>Pending task</h2>
        <TodoContainer
          toDos={toDos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}
