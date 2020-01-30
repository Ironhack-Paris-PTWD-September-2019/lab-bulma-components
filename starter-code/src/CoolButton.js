import React, { Component } from "react";
import 'bulma/css/bulma.css';

class  CoolButton extends Component {
    render() {

      // console.log(Object.keys(this.props));
      // let tabClass = Object.keys(this.props);
      // let listClass = "";
      
      // tabClass.map(function(element) {
      //   listClass += (element + " ");
      // });   

      let classes = "button";

      if ("isDanger" in this.props) {
        classes += " is-danger"
      }    

      if ("isSmall" in this.props) {
        classes += " is-small"
      }

      if ("isSuccess" in this.props) {
        classes += " is-success"
      }

      console.log(classes);

      return (

        <div className="CoolButton">
          <button className={classes}>{this.props.children}</button>
        </div>

        
    );
    }
}

export default CoolButton; 
