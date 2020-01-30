import React, { Component } from "react";
import "./App.css";
import Navbar from './Navbar.js';
import FormField from './FormField.js';
//import CoolButton from './CoolButton.js';
import Signup from './Signup.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="part">
            <h1>Itération 1 à 3</h1>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <div className="part">
            <h1>Itération 4 component Signup</h1>
            <Signup/>
        </div>
      </div>
    );
  }
}

export default App; 