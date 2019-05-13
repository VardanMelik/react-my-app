/* Mounting Methods
  constructor
  getDerivedStateFromProps
  componentDidMount

*/

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
  shouldCompanentUpdate() {
    console.log('LifeCyrcleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCyrcleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('LifeCyrcleA componentDidUpdate')
  }
  changeState = () => {
    this.setState ({
      name: 'Codevolution'
    })
  }


  render() {
    return (
      <div>
        <h1>LifeCycleA</h1>
        <button onClick={this.state.changeState}>Change State</button>
        <LifeCyrcleB />

      </div>
    )
  }
}
export default LifeCycleA
