import React, { Component } from 'react'

/*class ChildComponent extends Component {
  constructor () {
    super()
    alert('Hello' + this.state)
  }

    render() {
      return(
        <div>
          <button onClick={this.greetHandler}>Greet Parent</button>

        </div>
      )
    }
}*/
function ChildComponent(props){
  return (
    <div>
      <button onClick={ () => props.greetHandler}>Greet Parent</button>
    </div>
  )
}



export default ChildComponent
