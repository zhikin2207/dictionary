import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Paper className="paper">
                    Go to <Link to="/words">Words page</Link><br />
                    Go to <Link to="/games">Games page</Link><br />
                </Paper>
            </div>
        );
    }
}

export default HomePage;
