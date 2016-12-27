import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

import TextBox from '../../common/form/text-box';
import validate from './new-word-form-validation';

class NewWordForm extends React.Component {
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.props.onAdd)}>
                    <div className="col-1-4">
                        <Field name="value" component={TextBox} label="Word" showError={false} />
                    </div>
                    <div className="col-1-4">
                        <Field name="translation" component={TextBox} label="Translation" showError={false} />
                    </div>
                    <div className="col-1-4">
                        <RaisedButton type="submit" label="Add" primary={true} className="button" />
                        <RaisedButton type="submit" label="Reset" secondary={true} className="button" onClick={this.props.reset}/>
                    </div>
                </form>
            </div>
        );
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