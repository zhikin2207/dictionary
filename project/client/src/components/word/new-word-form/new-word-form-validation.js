const validate = values => {
    const errors = {};

    if (!values.translation) {
        errors.translation = 'Field can not be empty';
    }

    return errors;
};

export default validate;