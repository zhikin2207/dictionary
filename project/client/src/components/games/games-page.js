import React from 'react';
import {Link} from 'react-router';

class GamesPage extends React.Component {
    render() {
        return (
            <div>
                Games page <Link to="/games/yes-no">Yes-No</Link>
            </div>
        );
    }
}

export default GamesPage;