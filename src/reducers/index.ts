import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { fetchingReducer } from "./fetching";
import { Todo } from "../actions";

export interface StoreState {
  todos: Todo[];
  fetching: boolean;
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  fetching: fetchingReducer
});
