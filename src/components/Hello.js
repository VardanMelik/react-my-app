import React from 'react'

const Hello = () => {
  /*return (
    <div className = 'dummyClass'>
    <h1>Hello from Hello.js file</h1>
    </div>
  )*/
  
// JSX
return React.createElement(
  'div',
  {id: 'hello', className: 'dummyClass'},
  React.createElement('h1', null, 'Hello Vardan' ))
}
export default Hello;
