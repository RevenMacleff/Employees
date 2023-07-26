import { useState } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const [data, setData] = useState([
    { name: "Aleksandr", salary: 800, increase: true, id: 1, rise: false },
    { name: "Petr", salary: 900, increase: false, id: 2, rise: false },
    { name: "John", salary: 1100, increase: true, id: 3, rise: true },
  ]);

  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const deleteItem = (id) => {
    setData((data) => {
      /*       const index = data.findIndex((elem) => elem.id === id); */
      /* console.log(index); */
      /*       const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return newArr; */
      return data.filter((item) => item.id !== id);
    });
  };

  const addNewPost = (newPost) => {
    setData([...data, newPost]);
  };

  const onToggleIncrease = (id) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      })
    );
  };
  const onToggleRise = (id) => {
    setData((data) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, rise: !old.rise };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return newArr;
    });
  };

  const searchEmp = (items, text) => {
    if (text.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(text) > -1;
    });
  };

  const onUpdateSearch = (text) => {
    setText(text);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      case "increase":
        return items.filter((item) => item.increase);
      default:
        return items;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const visibleData = filterPost(searchEmp(data, text), filter);

  return (
    <div className="app">
      <AppInfo
        people={data.length}
        increase={data.filter((item) => item.increase).length}
      />

      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>

      <EmployeesList
        data={visibleData}
        onDeleted={deleteItem}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
      />
      <EmployeesAddForm create={addNewPost} />
    </div>
  );
}

export default App;
