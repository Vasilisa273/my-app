import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Sign_in';
import SignUp from "./Sign_up";
import OnePage from "./OnePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <OnePage/>
          <SignIn/>
          <SignUp/>
          {/*<button>Save</button>*/}

              {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
