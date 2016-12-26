import React, {PropTypes} from 'react';
import MainMenu from './common/main-menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <MainMenu />
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
