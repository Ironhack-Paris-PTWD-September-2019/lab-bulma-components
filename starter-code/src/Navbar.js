import React from "react"; 
import CoolButton from './CoolButton.js';

class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <nav className="navbar">

                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                        </a>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <CoolButton isSmall>Signup</CoolButton>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar;