import React from "react";
import Navbar from './Navbar'
import FormField from './FormField'
import Signup from "./Signup";
import Message from './Message'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <Signup />
          <Message />
        </div>
      );
    }
  }
  
  export default App;