import React from 'react';
import {connect} from 'react-redux'

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        componentWillMount() {
            const authenticated = this.props.authenticated || this.hasLocalStorageUser();

            if (!authenticated) {
                this.context.router.push('/signin');
            }
        }

        compoentWillUpdate(nextProps) {
            const authenticated = nextProps.authenticated || this.hasLocalStorageUser();

            if (!authenticated) {
                this.context.router.push('/signin');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
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
        router: React.PropTypes.object
    };

    const mapStateToProps = (state) => ({
            authenticated: state.user.authenticated
    });

    return connect(mapStateToProps)(Authentication);
}
