import React from 'react';
import WordRow from './word-row';
import WordRowEdit from './word-row-edit';

const WordList = ({words, editKey, onWordRemove, onWordChange, onWordCancelChange, onWordSave}) => {
    const renderWords = (word) => {
        if (word.key === editKey) {
            return <WordRowEdit word={word} key={word.key} onCancel={onWordCancelChange} onSave={onWordSave}/>;
        } else {
            return <WordRow word={word} key={word.key} onRemove={onWordRemove} onChange={onWordChange} />;
        }
    };

    return (
        <div>
            {words.map(renderWords)}
        </div>
    );
};

export default WordList;
