/* Mounting Methods
  constructor
  getDerivedStateFromProps
  componentDidMount

*/

import React, { Component } from 'react'


class LifeCyrcleB extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React'
    }
    console.log('LifeCyrcleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCyrcleB getDeriveStateFromProps')
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



  render() {
    return (
      <div>
        <h1>LifeCyrcleB</h1>

      </div>
    )
  }
}
export default LifeCyrcleB
