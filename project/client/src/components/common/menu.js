import React from 'react';
import {Link, IndexLink} from 'react-router';

const Menu = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/" className="navbar-link">Слова</IndexLink></li>
                    <li><Link to="/word-new">Создать</Link></li>
                </ul>
                <ul className="nav navbar-nav pull-right">
                    <li><a href="#" className="navbar-link">Sign In</a></li>
                    <li><a href="#" className="navbar-link">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
