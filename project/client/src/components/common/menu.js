import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {browserHistory} from 'react-router'
import * as userActions from '../../actions/user-actions';

const styles = {
    title: {
        cursor: 'pointer'
    },
    appBar: {
        backgroundColor: '#673AB7'
    }
};

class Menu extends React.Component {
    render() {
        return (
            <AppBar 
                style={styles.appBar} 
                title={<span style={styles.title}>Home</span>} 
                showMenuIconButton={false}
                onTitleTouchTap={this.onTitleClick}
                iconElementRight={
                    this.props.authenticated
                        ? <FlatButton label="Sign Out" containerElement={<Link to="/signout" />} />
                        : <FlatButton label="Sign In" onClick={this.props.auth.signIn} />
                } />
        );
    }

    onTitleClick() {
        browserHistory.push('/');
    }
}

const mapDispatchToProps = (dispatch) => ({
    auth: bindActionCreators(userActions, dispatch)
});

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    displayName: state.user.displayName,
    photoUrl: state.user.photoUrl
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);