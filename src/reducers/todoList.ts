import {
  DELETE_LIST_ITEM,
  GET_LIST_ITEMS,
  TOGGLE_LIST_ITEM,
} from "../actions/todoList";

const initialState: any[] = [];

export function getTodoList(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case DELETE_LIST_ITEM:
      return [...state.filter((id) => id.id !== action.payload)];
    case TOGGLE_LIST_ITEM:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !action.payload.status,
        };
      });
    case GET_LIST_ITEMS:
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.payload.todo,
          completed: false,
        },
      ];
    default:
      return state;
  }
}
