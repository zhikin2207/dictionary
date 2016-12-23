import React from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/user-actions';

class SignoutPage extends React.Component {
    componentWillMount() {
        this.props.signOut();
    }

    render() {
        return (
            <div>Sorry to see you go...</div>
        );
    }
}

export default connect(null, userActions)(SignoutPage);
