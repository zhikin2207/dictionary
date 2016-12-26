import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, IndexLink} from 'react-router';
import * as userActions from '../../actions/user-actions';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MainMenu = ({authenticated, displayName, auth}) => {
    return (
        <AppBar title="My Dictionary" showMenuIconButton={false} iconElementRight={authenticated ?
            <FlatButton label="Sign Out" containerElement={<Link to="/signout" />} /> :
            <FlatButton label="Sign In" onClick={auth.signIn} />
        } />
    );
};

const mapDispatchToProps = (dispatch) => ({
    auth: bindActionCreators(userActions, dispatch)
});

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    displayName: state.user.displayName,
    photoUrl: state.user.photoUrl
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);