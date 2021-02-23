const TodoItem = ({
  task,
  student,
  isCompleted,
  handleUpdate,
  handleDelete,
  id
}) => {
  return (
    <>
      <span>{task}</span>
      <span>{student}</span>

      <span>
        <label>
          <input
            type="checkbox"
            defaultChecked={isCompleted}
            className="option-input checkbox"
            onChange={() =>
              handleUpdate({
                _id: id,
                task: task,
                isCompleted: !isCompleted,
                student: student
              })
            }
          />
          Completed
        </label>
      </span>
      <span>
        <button onClick={() => handleDelete(id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </span>
    </>
  );
};

export default TodoItem;
