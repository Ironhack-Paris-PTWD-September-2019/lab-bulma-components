import React from "react";

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar is-transparent">
          
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button">
                      <span>
                        Login
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-primary">
                      <span>Signup</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>
    );
  }
}

export default Navbar;