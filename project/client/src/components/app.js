import React, {PropTypes} from 'react';
import Menu from './common/menu';
import Paper from 'material-ui/Paper';

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
    children: PropTypes.object.isRequired
};

export default App;
