import React from 'react';
import WordRow from './word-row';
import WordRowEdit from './word-row-edit';

const WordList = ({words, editKey, onWordRemove, onWordChange, onWordCancelChange}) => {
    const renderWords = (word) => {
        if (word.key === editKey) {
            return <WordRowEdit word={word} key={word.key} onCancel={onWordCancelChange} onSave={onWordCancelChange}/>;
        } else {
            return <WordRow word={word} key={word.key} onRemove={onWordRemove} onChange={onWordChange} />;
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    Word
                </div>
                <div className="col-md-4">
                    Translation
                </div>
                <div className="col-md-4">
                    Actions
                </div>
            </div>
            {words.map(renderWords)}
        </div>
    );
}

export default WordList;
