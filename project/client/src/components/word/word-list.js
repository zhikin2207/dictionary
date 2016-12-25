import React from 'react';
import WordRow from './word-row';
import WordRowEdit from './word-row-edit';

const WordList = ({words, editKey, onWordRemove, onEditStart, onEditCancel, onEditComplete}) => {
    const renderWords = (word) => {
        if (word.key === editKey) {
            return <WordRowEdit word={word} key={word.key} onEditCancel={onEditCancel} onEditComplete={onEditComplete}/>;
        } else {
            return <WordRow word={word} key={word.key} onRemove={onWordRemove} onEditStart={onEditStart} />;
        }
    };

    return (
        <div>
            {words.map(renderWords)}
        </div>
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
