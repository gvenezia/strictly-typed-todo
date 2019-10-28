import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface SetFetching {
  type: ActionTypes.setFetching;
  payload: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch, getState: any) => {
  const stateIdSet: Set<Object> = new Set(
    getState().todos.map(({ id }: any): number => id)
  );

  const response = await axios.get<Todo[]>(url);

  const newData = response.data.filter(({ id }) => !stateIdSet.has(id));

  if (newData.length) {
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  }
  dispatch(setFetching(false));
};

export const deleteTodo = (id: number) => ({
  type: ActionTypes.deleteTodo,
  payload: id
});

export const setFetching = (b: boolean) => ({
  type: ActionTypes.setFetching,
  payload: b
});
