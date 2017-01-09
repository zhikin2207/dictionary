import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {SubmissionError} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextBox from '../../common/form/text-box';
import validate from './new-word-form-validation';

class NewWordForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <Field name="value" component={TextBox} label="Word" showError={true} />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <Field name="translation" component={TextBox} label="Translation" showError={true} />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <RaisedButton type="submit" label="Add" primary={true} className="button" />
                        <RaisedButton type="button" label="Reset" secondary={true} className="button" onClick={this.props.reset}/>
                    </div>
                </div>
            </form>
        );
    }

    onFormSubmit(values) {
        const self = this;

        return Promise.resolve(values)
            .then(validate)
            .then(errors => {
                if (Object.keys(errors).length !== 0) {
                    throw new SubmissionError(errors);
                }

                self.props.onAdd(values);
                self.props.reset();
            });
    }
}

NewWordForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired
};

export default reduxForm({
    form: 'new-word-form',
    validate
})(NewWordForm);