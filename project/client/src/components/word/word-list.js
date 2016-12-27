import React from 'react';
import WordItem from './word-item';
import EditWordForm from './edit-word/edit-word-form';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const WordList = ({words, editKey, onWordRemove, onEditStart, onEditCancel, onEditComplete}) => {
    const renderWords = (word) => {
        if (word.key === editKey) {
            return <ListItem><EditWordForm word={word} key={word.key} onEditCancel={onEditCancel} onEditComplete={onEditComplete}/></ListItem>;
        } else {
            return [<ListItem><WordItem word={word} key={word.key} onRemove={onWordRemove} onEditStart={onEditStart} /></ListItem>, <Divider />];
        }
    };

    return (
        <List>
            <Subheader>Words</Subheader>
            {words.map(renderWords)}
        </List>
    );
};

WordList.propTypes = {
    words: React.PropTypes.array.isRequired,
    editKey: React.PropTypes.string.isRequired,
    onWordRemove: React.PropTypes.func.isRequired,
    onEditStart: React.PropTypes.func.isRequired,
    onEditCancel: React.PropTypes.func.isRequired,
    onEditComplete: React.PropTypes.func.isRequired
};

export default WordList;
