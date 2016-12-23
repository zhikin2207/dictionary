import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './new-word-form-validation';
import TextBox from '../../common/form/text-box';

const NewWordForm = (props) => {
    const {handleSubmit} = props;

    return (
        <form className="col-md-4 col-md-offset-4" onSubmit={handleSubmit(props.onSubmit)}>
            <h2>Новое слово</h2>

            <div className="form-group">
                <Field name="value" type="text" component={TextBox} label="Word" />
            </div>

            <div className="form-group">
                <Field name="translation" type="text" component={TextBox} label="Translation" />
            </div>

            <button type="submit" className="btn btn-default pull-right">Create</button>
        </form>
    );
};

export default reduxForm({
    form: 'new-word',
    validate
})(NewWordForm);
