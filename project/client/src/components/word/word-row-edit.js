import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextBox from '../common/form/text-box';

class WordRowEdit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.props.handleSubmit;
        this.onCancel = this.props.onCancel;
        this.onSave = this.props.onSave;
    }

    componentWillMount() {
        this.props.initialize(this.props.word);
    }

    render() {
        return (
            <div className="row">
                <hr/>
                <form onSubmit={this.handleSubmit(this.onSave)}>
                    <div className="col-md-4">
                        <Field name="value" type="text" component={TextBox} label="Word"/>
                    </div>
                    <div className="col-md-4">
                        <Field name="translation" type="text" component={TextBox} label="Translation"/>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-link">Save</button>
                        <button type="button" className="btn btn-link" onClick={this.onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'edit-word-form'
})(WordRowEdit);