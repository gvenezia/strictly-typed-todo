import React from "react";

interface AppProps {
  color?: string;
}

interface AppState {
  count: number;
}

export const App2 = (props: AppProps): JSX.Element => {
  return <div> Second App Div with color: {props.color} </div>;
};

export class App extends React.Component<AppProps, AppState> {
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
        <div> Hi there</div>
        <button onClick={this.incrementHandler}>Increment </button>
        <button onClick={this.decrementHandler}>Decrement </button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
