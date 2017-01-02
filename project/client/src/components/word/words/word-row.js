import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const WordRow = ({word, onRemove, onEditStart}) => {
    const removeWord = () => onRemove(word.key);
    const editWord = () => onEditStart(word.key);

    return (
        <TableRow>
            <TableRowColumn>{word.value}</TableRowColumn>
            <TableRowColumn>{word.translation}</TableRowColumn>
            <TableRowColumn>
                <FlatButton label="Edit" primary={true} onClick={editWord} />
                <FlatButton label="Remove" secondary={true} onClick={removeWord} />
            </TableRowColumn>
        </TableRow>
    );
};

WordRow.propTypes = {
    word: React.PropTypes.object.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onEditStart: React.PropTypes.func.isRequired
};

export default WordRow;
