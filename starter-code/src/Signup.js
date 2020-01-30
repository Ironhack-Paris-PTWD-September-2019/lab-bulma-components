import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import FormField from "./Formfield";
import CoolButton from "./CoolButton";

class Signup extends Component {
    render() {
      return (
        <div>
        <form action="/Signup" method="post">
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
          <FormField label="Password" type="password" placeholder="password"/>
          <CoolButton isSmall isSuccess>Submit</CoolButton>
        </form>
        </div>
      );
    }
  }
  
  
  export default Signup; 
  