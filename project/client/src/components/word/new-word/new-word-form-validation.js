const validate = (values) => {
    const errors = {};

    if (!values.value) errors.value = 'Введите слово';
    if (!values.translation) errors.translation = 'Введите перевод слова';

    return errors;
}

export default validate;
