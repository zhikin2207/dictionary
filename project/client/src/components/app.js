import React from 'react';
import Menu from './common/menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object.isRequired
};

export default App;
