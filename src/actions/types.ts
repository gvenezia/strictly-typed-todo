import { FetchTodosAction, DeleteTodoAction } from "../actions";

export type Action = FetchTodosAction | DeleteTodoAction;

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}
