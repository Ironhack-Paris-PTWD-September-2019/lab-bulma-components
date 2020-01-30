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
        <form className="form">
          <FormField
            label="Name"
            type="text"
            placeholder="e.g Elisa Salamanca"
          />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. elisa@ironhack.com"
          />
          <FormField label="Password" type="password" placeholder="*********" />
          <CoolButton isSmall isSucess className="is-rounded my-class">
            Submit
          </CoolButton>
        </form>
      </div>
    );
  }
}

export default App;
