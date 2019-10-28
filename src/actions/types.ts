import { FetchTodosAction, DeleteTodoAction, SetFetching } from "../actions";

export type Action = FetchTodosAction | DeleteTodoAction | SetFetching;

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  setFetching
}
