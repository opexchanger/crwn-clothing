import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      random: 'ble',
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    const { counter } = this.state;
    console.log(this.state);
    return <button onClick={this.handleClick}>Clicked {counter} times</button>;
  }
}

export default Counter;
