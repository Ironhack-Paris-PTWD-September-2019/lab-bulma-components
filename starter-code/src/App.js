import React, { Component } from "react";
import Pitre from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Signup from "./Signup.js";


class App extends Component {
  render() {
    return (
      <div>
        <Pitre/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Signup/>
        
      </div>
    );
  }
}

export default App;