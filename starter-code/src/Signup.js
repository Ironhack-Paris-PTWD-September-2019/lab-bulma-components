import React from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

class Signup extends React.Component {
    render() {
        return (
            <div className="Signup">
                <Navbar />

                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="e.g. *****" />
                
                <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
            </div>
            
        );
    }
};

export default Signup;