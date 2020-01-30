import React, { Component } from "react";

class CoolButton extends Component {
    render() {
      return (
<button className={this.props.classname} style={{margin: '30px 50px'}}>
{this.props.text}
  </button>
);
}
}

export default CoolButton;