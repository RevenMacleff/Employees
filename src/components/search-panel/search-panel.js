import "./search-panel.css";
import { useState } from "react";
const SearchPanel = (props) => {
  const [text, setText] = useState("");

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    setText(term);
    props.onUpdateSearch(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={text}
      onChange={onUpdateSearch}
    />
  );
};

export default SearchPanel;
