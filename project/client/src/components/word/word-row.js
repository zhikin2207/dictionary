import React from 'react';

const WordRow = ({word, onRemove, onChange}) => {
    const removeWord = () => onRemove(word.key);
    const changeWord = () => onChange(word.key);

    return (
        <div className="row">
            <hr/>
            <div className="col-md-4">{word.value}</div>
            <div className="col-md-4">{word.translation}</div>
            <div className="col-md-4">
                <button type="button" className="btn btn-link" onClick={changeWord}>Change</button>
                <button type="button" className="btn btn-link" onClick={removeWord}>Remove</button> 
            </div>
        </div>
    );
};

export default WordRow;
