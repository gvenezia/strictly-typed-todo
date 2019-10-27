import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  constructor(props: AppProps) {
    super(props);

    this.state = { count: 0 };
  }

  onClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] =>
    this.props.todos.map(({ title }) => <div>{title}</div>);

  render() {
    console.log(this.props.todos);
    return <div onClick={this.onClick} />;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
