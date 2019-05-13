import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React'
    }
    console.log('LifeCycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getDeriveStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifeCycleB componentDidMount')
  }

  render() {
    return (
      <div>
        <h1>LifeCycleB</h1>
      </div>
    )
  }
}
export default LifeCycleB
