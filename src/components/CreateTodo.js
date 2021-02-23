import { useForm } from "react-hook-form";
import "./CreateTodo.css";

const CreateTodo = ({ create }) => {
  // let hola = {
  //   task: 'Prueba5',
  //   isCompleted: false,
  //   student: 'alumno'
  // }

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      task: "",
      isCompleted: false,
      student: ""
    }
  });

  const onSubmit = (data) => {
    create(data);
    reset();
  };

  return (
    <div className="container-form">
      <div className="container">
        <h2>New task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-space-around">
            <div className="input-field col-sm-5">
              <input name="task" ref={register} required />
              <label>task</label>
            </div>
            <div className="input-field col-sm-5">
              <input name="student" ref={register} required />
              <label>student</label>
            </div>
          </div>
          <input name="isCompleted" ref={register} type="hidden" />
          <div className="button">
            <div className="inner"></div>
            <button>Submit!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
