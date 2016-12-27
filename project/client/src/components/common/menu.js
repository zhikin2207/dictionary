import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import * as userActions from '../../actions/user-actions';

const appBarStyle = {
    backgroundColor: '#673AB7'
};

const Menu = ({authenticated, displayName, auth}) => {
    return (
        <AppBar 
            style={appBarStyle} 
            title="My Dictionary" 
            showMenuIconButton={false}
            iconElementRight={
                authenticated ? 
                <FlatButton label="Sign Out" containerElement={<Link to="/signout" />} /> :
                <FlatButton label="Sign In" onClick={auth.signIn} />
            }>
        </AppBar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);