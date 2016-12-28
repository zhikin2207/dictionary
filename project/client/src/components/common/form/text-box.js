import React from 'react';
import TextField from 'material-ui/TextField';

const TextBox = ({ input, label, showError, meta: { touched, error }}) => (
    <TextField
        fullWidth={true}
        floatingLabelText={label}
        errorText={showError && touched && error}
        autocomplete={false}
        {...input} />
);

export default TextBox;