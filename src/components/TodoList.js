import React from "react";

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.items.map((item, index) => (
        <li
          key={index}
          className={item.done ? "todo-list-item done" : "todo-list-item"}
          onClick={e => (!item.done ? props.onItemClick(item, e) : null)}
        >
          <input
            type="checkbox"
            checked={item.done}
            readOnly
            style={{ pointerEvents: "none" }}
          />
          <span style={{ marginLeft: "10px" }}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
