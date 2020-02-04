import React from 'react'

import Navbar from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'

class Signup extends React.Component {
  render() {
    return (
      <div class="Signup">
        <form>
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="shhhhht" />

        <CoolButton isSmall isSuccess>Register</CoolButton>
        </form>
      </div>
    );
  }
}

export default Signup