import React from "react"; 
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';
import "./App.css";

class Signup extends React.Component {
    render(){
        return(
            <div>
                <div className="part">
                    <Navbar/>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="e.g. ***" />
                </div>
                <CoolButton>Sign Up</CoolButton>
            </div>
        )
    }
}

export default Signup;