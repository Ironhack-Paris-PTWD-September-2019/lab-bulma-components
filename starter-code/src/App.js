import React, { Component } from "react";
import Nav from "./Nav.js";
import Formfield from "./Formfield.js"

class App extends Component {
    render() {
      return (
      <div className="app">
          <Nav />
          <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      );
    }
  }

  export default App;