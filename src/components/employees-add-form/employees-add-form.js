import "./employees-add-form.css";
import { useState } from "react";

const EmployeesAddForm = ({ create }) => {
  const [value, setValue] = useState({
    name: "",
    salary: "",
    increase: false,
    rise: false,
  });

  const addNewPost = (e) => {
    e.preventDefault();
    /*         setPosts([...posts, { ...post, id: Date.now() }]); , n*/
    /*     setTitle("");
    setBody(""); 
    */
    const newPost = {
      ...value,
      id: Date.now(),
    };
    create(newPost);
    setValue({ name: "", salary: "", increase: false, rise: false });
  };

  const onValueChange = (e) => {
    setValue({
      /* name: value.name,
      salary: value.salary, синтаксик со spread и без него*/ ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          onChange={onValueChange}
          value={value.name}
          name="name"
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          onChange={onValueChange}
          value={value.salary}
          name="salary"
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={addNewPost}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
