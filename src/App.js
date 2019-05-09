import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends React.Component {
    render() {
        return (
          <div className = "App"> {
                /*<Greet />

                        <Hello />*/
            }
            <Greet name="Bruce" heroName="Batman" >
              <p>This is children props</p>
            </Greet>
            <Greet name="Clark" heroName="Superman">
              <button>Action</button>
            </Greet>
            <Greet name="Clark" heroName="Superman" />
            <Greet name="Diana" heroName="Wonder Woman"/>

            <Welcome name="Diana" heroName="Wonder Woman"/>
            <Welcome name="Clark" heroName="Superman"/>
            <Welcome name="Clark" heroName="Superman"/>
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
