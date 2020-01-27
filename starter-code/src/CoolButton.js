import React, { Component } from "react";
import 'bulma/css/bulma.css';

class  CoolButton extends Component {
    render() {
      return (
        <div>
          <a className="button is-rounded my-class is-danger is-small" href="/Signup.js">Signup</a>
          <button className="button is-small is-success">Login</button>
        </div>
    );
    }
}

export default CoolButton; 
