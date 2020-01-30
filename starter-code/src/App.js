import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

import Signup from "./Signup";


class App extends Component {
  render() {
    return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      
      <CoolButton name1="Bouton 1" class1="is-rounded" class2="my-class" class3="is-danger" class4="is-small"/>
      <CoolButton name1="Bouton 2" class1="is-small" class2="is-success"/>
      
      <Signup/>

    </div>

    );
  }
}
export default App;