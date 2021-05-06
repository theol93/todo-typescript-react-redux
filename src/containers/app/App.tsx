import React from "react";
import "./App.css";
import List from "../../components/list";
import AddElement from "../../components/addElement";
import { getListItems } from "../../actions/todoList";
import { removeItem } from "../../actions/todoList";
import { toggleListItems } from "../../actions/todoList";

import { connect } from "react-redux";

function App(props: any) {
  const { setListItems, todoList, setToggleListItems, setRemoveItem } = props;

  return (
    <div className="App">
      <header className="App-header">ЛИСТ ПОКУПОК</header>
      <div className="List">
        <List
          todoList={todoList}
          setToggleListItems={setToggleListItems}
          setRemoveItem={setRemoveItem}
        />
      </div>
      <div className="AddElement">
        <AddElement todoList={todoList} setListItems={setListItems} />
      </div>
    </div>
  );
}

const mapStateToProps = (store: any) => {
  return {
    todoList: store.todoList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setListItems: (todo: string) => dispatch(getListItems(todo)),
    setToggleListItems: (id: number, status: boolean) =>
      dispatch(toggleListItems(id, status)),
    setRemoveItem: (id: number) => dispatch(removeItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
