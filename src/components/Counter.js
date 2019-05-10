import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  addFunction () {
    /*this.setState({
      count: this.state.count + 1
    }, () =>{
      // CallBack
      console.log("Callback value " + this.state.count)
    })*/
    this.setState((preveState, props) => ({
      count: preveState.count + 1
    }))

    console.log("State value "      + this.state.count)
      //this.state.count++
  }
  incrementFive() {
    this.addFunction()
    this.addFunction()
    this.addFunction()
    this.addFunction()
    this.addFunction()
  }



    render() {
      return (
          <div>
            <div>Counter - {this.state.count}</div>
            <button onClick={ () => this.incrementFive()}>Add Number</button>
          </div>
        )
    }
}

export default Counter
