import React from "react";
import connect from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.state = { count: 0 };
  }

  incrementHandler = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementHandler = (): void => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div> Hi there {this.props.}</div>
        <button onClick={this.incrementHandler}>Increment </button>
        <button onClick={this.decrementHandler}>Decrement </button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {todos: state.todos}
}
