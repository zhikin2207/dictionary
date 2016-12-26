import React, {PropTypes} from 'react';
import Menu from './common/menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
