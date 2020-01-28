import React from 'react';

class CoolButton extends React.Component {
    render() {
        return (
            <div className="CoolButton">
                <button className="button is-rounded my-class is-danger is-small">Button 1</button>
                <button className="button is-small is-success">Button 2</button>
            </div>
            
        );
    }
};

export default CoolButton;