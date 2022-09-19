import React, { Component } from 'react';
import Child from '@/components/child';
class App extends Component {
  constructor() {
    super();
    this.state = {time: new Date()};
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <Child seconds={1}/>
        {this.state.time.toString()}
      </div>
    );
  }
}

export default App;