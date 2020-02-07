import React from 'react'

import Navbar from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'

import Signup from './Signup.js'

import Container from './Container.js'
import Message from './Message.js'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Iteration 1</h2>
        <Navbar />

        <h2>Iteration 2</h2>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <h2>Iteration 3</h2>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>

        <h2>Iteration 4</h2>
        <Signup />

        <h2>Iteration 5</h2>
        <Container>
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </div>
    )
  }
}

export default App
