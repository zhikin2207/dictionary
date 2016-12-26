import React from 'react';
import TextField from 'material-ui/TextField';

const TextBox = ({ input, label, showError, meta: { touched, error }}) => (
    <TextField hintText={label} errorText={showError && touched && error} {...input} />
);

export default TextBox;