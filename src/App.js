import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Redesign website",
      done: false
    },
    {
      id: 2,
      text: "Fix website front end bugs",
      done: true
    },
    {
      id: 3,
      text: "Optimize database",
      done: false
    },
    {
      id: 4,
      text: "Fix backend issues",
      done: false
    },
    {
      id: 5,
      text: "Fix deployment issues",
      done: true
    }
  ]);

  const onItemClick = (item, e) => {
    e.preventDefault();
    console.log("mark as done");
    let index = items.map(i => i.id).indexOf(item.id);
    let newItems = Array.from(items);
    newItems[index].done = !item.done;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Todos</h1>
      <TodoList items={items} onItemClick={onItemClick} />
      <div>
        <Button name="Close shipment" />
        <Button name="Close shipment" />
        <Button disabled={true} name="Close shipment" />
      </div>
    </div>
  );
};

export default App;
