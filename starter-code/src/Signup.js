import React, { Component } from "react";
import Nav from "./Nav.js";
import Formfield from "./Formfield.js"
import CoolButton from "./CoolButton.js"

class Signup extends Component {
    render() {

      return (
      <div className="app">
          <Nav />
          <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
          <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <Formfield label="Password" type="password" placeholder="*************" />
          <CoolButton classname="button is-medium is-link is-outline" text="Signup" style={{margin: '30px 80px'}}/>
      </div>
      );
    }
  }

  export default Signup;