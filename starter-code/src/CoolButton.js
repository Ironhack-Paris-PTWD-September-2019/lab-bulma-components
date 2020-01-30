import React, { Component } from "react";


class CoolButton extends Component {
    render () {
        return (
            <div>
                <button className={`button ${this.props.class1} ${this.props.class2} ${this.props.class3} ${this.props.class4}`}>{this.props.name1}</button>
               
               
                {/* <button className="button is-small is-success">{this.props.name2}</button> */}

            </div>
        )
    }
}


export default CoolButton;