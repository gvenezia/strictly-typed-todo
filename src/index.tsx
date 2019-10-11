import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App2 } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

// const App = (props: AppProps): JSX.Element => {
//   return <div>Hi There, I'm {props.color}</div>;
// };

ReactDOM.render(
  <Provider store={store}>
    <App2 color="maroon" />
  </Provider>,
  document.querySelector("#root")
);
