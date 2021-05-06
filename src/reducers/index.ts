import { getTodoList } from "./todoList";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todoList: getTodoList,
});
