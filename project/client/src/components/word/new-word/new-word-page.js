import React from 'react';
import {connect} from 'react-redux';
import NewWordForm from './new-word-form';
import * as dictionaryActions from '../../../actions/dictionary-actions';

class NewWordPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(word) {
        this.props.add(word);
    }

    render() {
        return (
            <NewWordForm onSubmit={this.handleFormSubmit} />
        );
    }
}

export default connect(null, dictionaryActions)(NewWordPage);
