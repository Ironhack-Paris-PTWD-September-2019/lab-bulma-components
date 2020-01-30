import React from 'react';

class CoolButton extends React.Component {
    render() {
        var classes = "button";

        if ('isDanger' in this.props) {
            classes += " is-danger";
            console.log(classes);
        } else {
            classes += " is-success";
        }

        return (
            <div className="CoolButton">
                <button className={classes}>{this.props.children}</button>
            </div>
            
        );
    }
};

export default CoolButton;