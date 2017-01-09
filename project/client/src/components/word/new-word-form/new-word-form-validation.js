const validate = values => {
    const errors = {};

    if (!values.value || !/^(?!\s*$).+/.test(values.value)) {
        errors.value = 'Word field is required';
    }

    if (!values.translation || !/^(?!\s*$).+/.test(values.translation)) {
        errors.translation = 'Translation field is required';
    }

    return errors;
};

export default validate;