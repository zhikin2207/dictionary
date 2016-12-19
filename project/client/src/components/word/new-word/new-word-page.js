import React from 'react';
import {connect} from 'react-redux';
import NewWordForm from './new-word-form';

class NewWordPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(word) {
    }

    render() {
        return (
            <NewWordForm onSubmit={this.handleFormSubmit} />
        );
    }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(NewWordPage);
