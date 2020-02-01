import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import FormField from "./Formfield";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <CoolButton name1="Bouton1" name2="Bouton2"/>

        

        </div>
    );
  }
}

export default App;