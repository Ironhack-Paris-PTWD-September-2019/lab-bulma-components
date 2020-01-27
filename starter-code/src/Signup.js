import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import FormField from "./Formfield";
import CoolButton from "./CoolButton";

class Signup extends Component {
    render() {
      return (
        <div>
        <form action="/Signup.js" method="post">
          <Navbar />
          <FormField />
          <FormField />
          <FormField />
          <CoolButton />
        </form>
        </div>
    );
    }
  }
  
  
  export default Signup; 
  