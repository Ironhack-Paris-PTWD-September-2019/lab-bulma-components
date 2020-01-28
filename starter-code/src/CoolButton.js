import React, { Component } from "react";
import 'bulma/css/bulma.css';

class  CoolButton extends Component {
    render() {
      return (
        <div>
          <button className={this.props}>Button</button>
        </div>
    );
    }
}

export default CoolButton; 
