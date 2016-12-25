import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextBox from '../common/form/text-box';

class WordRowNew extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.props.handleSubmit;
        this.onCancel = this.props.onCancel;
        this.onSave = this.props.onSave;
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
                        <button type="submit" className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'new-word-form'
})(WordRowNew);