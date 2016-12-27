const validate = values => {
    const errors = {};
    const requiredFields = ['value', 'translation'];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });

    return errors;
};

export default validate;