import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo, setFetching } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetching: boolean;
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  setFetching: typeof setFetching;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  onButtonClick = (): void => {
    this.props.setFetching(true);
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] =>
    this.props.todos.map(({ id, title }: Todo) => (
      <div onClick={() => this.onTodoClick(id)} key={id}>
        {title}
      </div>
    ));

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <button disabled>Fetching</button>
        ) : (
          <button onClick={this.onButtonClick}>Fetch</button>
        )}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({
  todos,
  fetching
}: StoreState): { todos: Todo[]; fetching: boolean } => {
  return { todos, fetching };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo, setFetching }
)(App);
