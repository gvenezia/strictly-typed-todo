import { ActionTypes, Action } from "../actions/types";

export const fetchingReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case ActionTypes.setFetching:
      return action.payload;

    default:
      return state;
  }
};
