import React, { Component } from 'react';
import Child from './Components/Child';

class App extends Component {
  constructor() {
    super()
    this.state = {
      str: 'Hello world',
      showStr: false,
      num: 123,
      counter: 0,
      users: [
        {
          id: 0,
          name: 'John',
          age: 15
        },
        {
          id: 1,
          name: 'Sam',
          age: 35
        },
        {
          id: 2,
          name: 'Ruby',
          age: 105
        },
        {
          id: 3,
          name: 'Dean',
          age: 27
        },
      ]
    }
  }

  incriment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  decriment = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  componentDidUpdate() {
    console.log('Counter new value = ', this.state.counter);
  }


  render() {
    return (
      <div>
        {this.state.showStr && this.state.str}
        {this.state.counter}
        <button onClick={this.incriment}>+</button>
        <button onClick={this.decriment}>-</button>
        {this.state.users.map(user =>
          <Child user={user} key={user.id} />
        )}
      </div>
    );
  }
}

export default App;
  