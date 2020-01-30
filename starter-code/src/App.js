import React from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import Signup from './Signup.js';
import CoolButton from './CoolButton.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Iteration 1-3</h1>
                <Navbar />

                <h1>Iteration 2</h1>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

                <h1>Iteration 3</h1>
                <CoolButton isSmall isDanger>Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>

                <h1>Iteration 4</h1>
                <Signup />
            </div>
            
        );
    }
};

export default App;