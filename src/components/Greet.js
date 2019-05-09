import React from 'react'

/*function Greet() {
  return <h1> Hello Vardan </h1>
}
*/
// ES6 writing
const Greet = (props) => {
  console.log(props)
  return <h1>Hello ES {props.name}</h1>
}

export default Greet
