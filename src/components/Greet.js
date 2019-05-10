import React from 'react'

/*function Greet() {
  return <h1> Hello Vardan </h1>
}
*/
// ES6 writing
const Greet = props => {
  const {name, heroName} = props
  //console.log(props)

  // ReadOnly property you can't change
  //props.name = 'Vardan'
  return (
    <div>
      <h1>
        Hello ES {name} a.k.a. {heroName}
      </h1>
    </div>
)
}

export default Greet
