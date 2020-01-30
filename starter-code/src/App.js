import React from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Signup from "./Signup.js";
import Message from "./Message.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Signup />
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default App;
