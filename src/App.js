import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Eyemotion from './components/Eyemotion'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import './appStyles.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import LifeCyrcleB from './components/LifeCyrcleB'
import Fragment from './components/Fragment'
import Table from './components/Table'
import PureComp from './components/PureComponent'
import RegComp from './components/RegComponent'
import RefsDemo from './components/RefsDemo'
import Input from './components/Input'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'

class App extends React.Component {
    render() {
        return ( <div className="App">

            {
                /*  <Greet name="Bruce" heroName="Batman" >
                              <p>This is children props</p>
                            </Greet>
                            <Greet name="Clark" heroName="Superman">
                              <button>Action</button>
                            </Greet>
                            <Greet name="Clark" heroName="Superman" />
                            <Greet name="Diana" heroName="Wonder Woman"/>


                            <Welcome name="Clark" heroName="Superman"/>
                            <Welcome name="Clark" heroName="Superman"/>
                            <Message />
                            <Eyemotion />
                            <Counter />
                            <Greet />
                            <Welcome />
                            <Welcome name="Diana" heroName="Wonder Woman"/>
                            <ClassClick />
                            <FunctionClick />
                            <EventBind />
                            <ParentComponent />
                            <UserGreeting />

                            <NameList />
                            <StyleSheet primary={true}/>
                            <h1 className="error">Error</h1>
                            <h1 className= {styles.success}>Success</h1>
                            <Form />
                            <LifeCycleA />
                          <Fragment />
                          <Table />
                          <PureComp />
                          <RegComp />
                <RefsDemo />

                            <RefsDemo />
                            < FocusInput />

                            <Inline />
                            */
            }
            <FRParentInput />
            </div>
        );
    }
}
export default App;
