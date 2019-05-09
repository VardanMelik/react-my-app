import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        { /*<Greet />
        <Welcome />
         <Hello />*/}
         <Greet name="Bruce" />
         <Greet name="Clark"/>
         <Greet name="Diana" />

      </div>
    );
  }
}
export default App;

/*function App() {
    return ( <div className = "App">
        <header className ="App-header">
        <img src = { logo } className = "App-logo" alt= "logo"/>
        <p> React App <br /> Stateless Functional component </p><a className = "App-link"
        href = "https://reactjs.org" target = "_blank"
        rel = "noopener noreferrer">
        Learn React </a></header></div>
    );
}

export default App;*/
