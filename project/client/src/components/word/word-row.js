import React from 'react';

const WordRow = ({word, onRemove, onEditStart}) => {
    const removeWord = () => onRemove(word.key);
    const editWord = () => onEditStart(word.key);

    return (
        <div className="row">
            <hr/>
            <div className="col-md-4">{word.value}</div>
            <div className="col-md-4">{word.translation}</div>
            <div className="col-md-4">
                <button type="button" className="btn btn-link" onClick={editWord}>Edit</button>
                <button type="button" className="btn btn-link" onClick={removeWord}>Remove</button> 
            </div>
        </div>
    );
};

WordRow.propTypes = {
    word: React.PropTypes.object.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onEditStart: React.PropTypes.func.isRequired
};

export default WordRow;
