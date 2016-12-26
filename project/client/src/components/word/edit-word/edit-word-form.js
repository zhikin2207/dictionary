import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextBox from '../../common/form/text-box';

class EditWordForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.props.handleSubmit;
        this.onEditCancel = this.props.onEditCancel;
        this.onEditComplete = this.props.onEditComplete;
    }

    componentWillMount() {
        this.props.initialize(this.props.word);
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit(this.onEditComplete)}>
                    <div className="col-md-4">
                        <Field name="value" type="text" component={TextBox} label="Word"/>
                    </div>
                    <div className="col-md-4">
                        <Field name="translation" type="text" component={TextBox} label="Translation"/>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-link">Save</button>
                        <button type="button" className="btn btn-link" onClick={this.onEditCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

EditWordForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    onEditCancel: React.PropTypes.func.isRequired,
    onEditComplete: React.PropTypes.func.isRequired
};

export default reduxForm({
    form: 'edit-word-form'
})(EditWordForm);