import React, { Component } from "react";

class FormFeild extends Component {
  render() {

  return(
    <div className="FormFeild">
    <div className="field">
    <label class="label">Name</label>
    <div className="control">
      <input class="input" type="text" placeholder="e.g Alex Smith"/>
    </div>
  </div>
  <div className="field">
    <label class="label">Email</label>
    <div className="control">
      <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>
  </div>
  </div>)

}}

export default FormFeild;