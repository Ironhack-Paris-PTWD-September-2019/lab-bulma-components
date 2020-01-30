import React from "react";

class CoolButton extends React.Component {

  render() {
    let {button , isRounded ,myClass ,isDanger ,isSmall, children } = this.props
      return (
        <div className="App">
        <button className="button is-rounded my-class is-danger is-small">{children}</button>
        </div>
      );
    }
  }
  
  export default CoolButton;