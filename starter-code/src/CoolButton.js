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

  

      return (

        <div className="CoolButton">
          <button className={`button ${this.props.class1} ${this.props.class2} ${this.props.className} `}>{this.props.children}</button>
        </div>

        
    );
    }
}

export default CoolButton; 
