import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class App extends Component {
  render() {
    return ( <div className="App">
    <Navbar />
    <FormField />
    <CoolButton />

    </div>)
    
  }}
  
export default App;