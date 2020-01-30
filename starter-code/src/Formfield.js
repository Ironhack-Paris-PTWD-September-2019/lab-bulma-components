import React, { Component } from "react";

class Formfield extends Component {
    render() {
      return (
        <div className="field">
          <label className="label" style={{margin: '0px 50px'}}>{this.props.label}</label>
          <div className="control" style={{margin: '0px 50vw 0px 50px'}}>
            <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
          </div>
        </div>
);
}
}

export default Formfield;