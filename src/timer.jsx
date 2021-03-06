import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({ seconds: state.seconds + 1 }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  render() {
    return (
      <>
        <div>Seconds : {this.state.seconds % 60}</div>
        <div> Mins : {Math.floor(this.state.seconds / 60)} </div>
      </>
    );
  }
}
