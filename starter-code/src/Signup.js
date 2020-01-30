import React from "react";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Pitre from "./Navbar.js";

class Signup extends React.Component {
    render () {
        return (
            <div>
            <Pitre/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="email" placeholder="e.g. aZ@123456" />
            <CoolButton isSmall isDanger className="button is-rounded my-class is-danger is-small">Submit</CoolButton>
            </div>
        )
    }
}

export default Signup;