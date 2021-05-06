export const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";
export const GET_LIST_ITEMS = "GET_LIST_ITEMS";
export const TOGGLE_LIST_ITEM = "TOGGLE_LIST_ITEM";

export function getListItems(todo: string) {
  return {
    type: GET_LIST_ITEMS,
    payload: { todo },
  };
}

export function toggleListItems(id: number, status: boolean) {
  return {
    type: TOGGLE_LIST_ITEM,
    payload: { id, status },
  };
}

export function removeItem(id: number) {
  return {
    type: DELETE_LIST_ITEM,
    payload: id,
  };
}
