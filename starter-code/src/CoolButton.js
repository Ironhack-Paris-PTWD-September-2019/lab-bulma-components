import React from "react"; 

class CoolButton extends React.Component {

    render(){
        var classes = "button";
        if ('isSmall' in this.props) {
            classes += " is-small";
        }
        if ('isDanger' in this.props) {
            classes += " is-danger";
        }
        return(
            <button className={classes}>{this.props.children}</button>
        )
    }
}

export default CoolButton;