import React, { Component } from "react";
import CoolButton from "./CoolButton.js"

class Nav extends Component {
    render() {
      return (
        <nav className="navbar is-fixed" style={{margin: '30px 10px'}}>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
                <hr className="navbar-divider"/>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
                    <span>
                    <CoolButton classname="button is-small is-danger is-rounded my-class" text="Login"/>
                    </span>
                    <span>
                    <CoolButton classname="button is-small is-success" text="Signup"/>
                    </span>
            </div>
          </div>
        </div>
      </nav>
      );
    }
  }

  export default Nav;

