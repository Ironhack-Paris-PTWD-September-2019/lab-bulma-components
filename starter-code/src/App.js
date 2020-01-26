
import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import FormField from "./Formfield";

class App extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <FormField />
        </div>        
    );
  }
}

export default App; 