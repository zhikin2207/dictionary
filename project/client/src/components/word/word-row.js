import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: 12
};

const WordRow = ({word, onRemove, onEditStart}) => {
    const removeWord = () => onRemove(word.key);
    const editWord = () => onEditStart(word.key);

    return (
        <TableRow>
            <TableRowColumn>{word.value}</TableRowColumn>
            <TableRowColumn>{word.translation}</TableRowColumn>
            <TableRowColumn>
                <RaisedButton label="Edit" style={buttonStyle} onClick={editWord} />
                <RaisedButton label="Remove" style={buttonStyle} onClick={removeWord}/>
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
