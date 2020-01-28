import React from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="form">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}

export default App;
