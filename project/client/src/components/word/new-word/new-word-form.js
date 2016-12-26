import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

import TextBox from '../../common/form/text-box';
import validate from './new-word-form-validation';

const buttonStyle = {
    margin: 12
};

class NewWordForm extends React.Component {
    render() {
        return (
            <div className="row">
                <form onSubmit={this.props.handleSubmit(this.props.onAdd)}>
                    <div className="col-md-4">
                        <Field name="value" component={TextBox} label="Word" showError={false} />
                    </div>
                    <div className="col-md-4">
                        <Field name="translation" component={TextBox} label="Translation" showError={false} />
                    </div>
                    <div className="col-md-4">
                        <RaisedButton type="submit" label="Add" primary={true} style={buttonStyle} />
                        <RaisedButton type="submit" label="Reset" secondary={true} style={buttonStyle} onClick={this.props.reset}/>
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