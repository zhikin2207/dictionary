import React from 'react';
import TextField from 'material-ui/TextField';

class TextBox extends React.Component
{
    render() {
        return (
            <TextField
            fullWidth={true}
            floatingLabelText={this.props.label}
            errorText={this.props.showError && this.props.touched && this.props.error}
            {...this.props.input} />
        );
    }
}

export default TextBox;