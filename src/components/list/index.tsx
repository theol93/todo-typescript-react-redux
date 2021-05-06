import React from "react";
import "./index.css";
import { WiredButton } from "react-wired-elements";

export default function List(props: any) {
  let todoList = props.todoList;
  let setToggleListItems = props.setToggleListItems;
  let setRemoveItem = props.setRemoveItem;

  const toggleHandler = (id: number, status: boolean) => {
    return setToggleListItems(id, status);
  };

  const removeHandler = (id: number) => {
    return setRemoveItem(id);
  };

  let listItems = todoList.map((list: any, id: number) => {
    let card = "card";
    if (list.completed) {
      card = "card checked";
    }

    return (
      <div className="listName" key={id}>
        <input
          className="checkbox"
          type="checkbox"
          checked={todoList[id].completed}
          onChange={() =>
            toggleHandler(todoList[id].id, todoList[id].completed)
          }
        />
        <div className={card}>{list.todo}</div>
        <WiredButton
          className="btn"
          elevation={2}
          onClick={() => removeHandler(list.id)}
        >
          Удалить
        </WiredButton>
      </div>
    );
  });

  return <div>{listItems}</div>;
}
