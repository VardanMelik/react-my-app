import React, { Component } from 'react'
import LifeCyrcleB from './LifeCyrcleB'


class LifeCycleA extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React'
    }
    console.log('LifeCycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDeriveStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifeCyrcleA componentDidMount')
  }

  render() {
    return (
      <div>
        <h1>LifeCycleA</h1>
        <LifeCyrcleB />

      </div>
    )
  }
}
export default LifeCycleA
