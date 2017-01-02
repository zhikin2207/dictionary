import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class WordsList extends React.Component {
    render() {
        return (
            <List>
                {this.props.words.map(word => [
                    <ListItem primaryText={word.value} secondaryText={word.translation} key={word.key} />,
                    <Divider />
                ])}
            </List>
        );
    }
}

WordsList.propTypes = {
    words: React.PropTypes.array.isRequired
};

export default WordsList;