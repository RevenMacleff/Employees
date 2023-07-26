import "./employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  increase,
  onDelete,
  onToggleIncrease,
  onToggleRise,
  rise,
}) => {
  /*   const [user, setUser] = useState(increase);
  const [rise, setRise] = useState(false); */
  /*   const onIncrease = () => {
    setUser((user) => !user);
  };
  const onRise = () => {
    setRise((rise) => !rise);
  }; */
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase === true) {
    classNames += " increase";
  }
  if (rise === true) {
    classNames += " like";
  }

  return (
    <li
      className=/* {increase + " list-group-item d-flex justify-content-between"} */ {
        classNames
      }
    >
      <span onClick={onToggleRise} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
