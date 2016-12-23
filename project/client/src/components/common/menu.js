import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, IndexLink} from 'react-router';
import * as userActions from '../../actions/user-actions';

const Menu = ({authenticated, displayName, auth}) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/" className="navbar-link">Home</IndexLink></li>
                    {authenticated && <li><Link to="/words" className="navbar-link">Words</Link></li>}
                    {authenticated && <li><Link to="/word-new" className="navbar-link">Create word</Link></li>}
                </ul>
                <ul className="nav navbar-nav pull-right">
                    {!authenticated && <li><a href="#" onClick={auth.signIn}>Sign In</a></li>}
                    {authenticated && <li><p className="navbar-text">Welcome {displayName}</p></li>}
                    {authenticated && <li><Link to="/signout">Sign Out</Link></li>}
                </ul>
            </div>
        </nav>
    );
};

const mapDispatchToProps = (dispatch) => ({
    auth: bindActionCreators(userActions, dispatch)
});

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    displayName: state.user.displayName
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
