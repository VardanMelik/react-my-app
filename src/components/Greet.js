import React from 'react'

/*function Greet() {
  return <h1> Hello Vardan </h1>
}
*/
// ES6 writing
const Greet = (props) => {
  console.log(props)

  // ReadOnly property you can't change
  //props.name = 'Vardan'
  return (
    <div>
      <h1>
        Hello ES {props.name} a.k.a. {props.heroName}
      </h1>
      {props.children}
    </div>
)
}

export default Greet
