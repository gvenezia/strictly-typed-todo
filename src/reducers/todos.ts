import { Todo, FetchTodosAction } from "../actions/";
import { ActionTypes } from "../actions/types";

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    default:
      return state;
  }
};
