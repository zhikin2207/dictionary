const validate = (values) => {
    const errors = {};

    if (!values.value) errors.value = 'Please, input a word';
    if (!values.translation) errors.translation = 'Please, input a word translation';

    return errors;
}

export default validate;
