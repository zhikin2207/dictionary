import React from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        constructor(props, context) {
            super(props, context);

            this.authenticated = false;
        }

        componentWillMount() {
            this.authenticated = this.props.authenticated || this.hasLocalStorageUser();

            if (!this.authenticated) {
                this.context.router.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            this.authenticated = nextProps.authenticated || this.hasLocalStorageUser();

            if (!this.authenticated) {
                this.context.router.push('/signin');
            }
        }

        componentWillReceiveProps(nextProps) {
            this.authenticated = nextProps.authenticated || this.hasLocalStorageUser();

            if (!this.authenticated) {
                this.context.router.push('/signin');
            }
        }

        render() {
            let composedComponent = this.authenticated && <ComposedComponent {...this.props} />;
            return composedComponent;
        }

        hasLocalStorageUser() {
            let hasLocalStorageUser = false;

            for (let key in localStorage) {
                if (key.startsWith('firebase:authUser:')) {
                    hasLocalStorageUser = true;
                    break;
                }
            }

            return hasLocalStorageUser;
        }
    }

    Authentication.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    const mapStateToProps = (state) => ({
            authenticated: state.user.authenticated
    });

    return connect(mapStateToProps)(Authentication);
}
