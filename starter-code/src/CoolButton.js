import React from "react";

class CoolButton extends React.Component {
    render () {

        const { className, children} = this.props;

        return (
            <div>
                <button className={className}>{children}</button>
            </div>
        )
    }
}

export default CoolButton;