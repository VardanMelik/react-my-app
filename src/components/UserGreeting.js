import React, { Component } from 'react'

class UserGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
    isLoggIn: false
  }
}

  render() {
    let message
    if(this.state.isLoggIn){
      message = <div>Welcome Vishwas</div>
    } else {
      message = <div>Please logIn</div>
    }
    return(
       <div>{message}</div>
     )

  }
}
export default UserGreeting
