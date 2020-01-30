import React from 'react';

class FormField extends React.Component {
    render() {
        return (
            <div className="FormField">
                <div className="field">
                  <label className="label">{this.props.label}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
            </div>
            
        );
    }
};

export default FormField;