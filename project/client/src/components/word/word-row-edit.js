import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextBox from '../common/form/text-box';

const WordRowEdit = ({word, onSave, onCancel}) => {
    const saveWord = () => onSave(word);

    return (
        <div className="row">
            <hr/>
            <form>
                <div className="col-md-4">
                    <Field name="value" type="text" component={TextBox} label="Word" />
                </div>
                <div className="col-md-4">
                    <input className="form-control" name="translation" type="text" value={word.translation}/>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn-link" onClick={saveWord}>Save</button> 
                    <button type="button" className="btn btn-link" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'edit-word-form'
})(WordRowEdit);