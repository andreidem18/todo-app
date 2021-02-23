import ToDoItem from "./TodoItem.js";
import "./TodoContainer.css";

const TodoContainer = ({ toDos, handleUpdate, handleDelete }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <ul>
        {toDos &&
          toDos.map((value) => {
            return (
              <li key={value._id}>
                <ToDoItem
                  task={value.task}
                  student={value.student}
                  isCompleted={value.isCompleted}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  id={value._id}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoContainer;
