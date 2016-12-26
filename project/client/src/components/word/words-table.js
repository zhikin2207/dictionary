import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import WordRow from './word-row';

const WordsTable = ({words, editKey, onWordRemove, onEditStart, onEditCancel, onEditComplete}) => {
    return (
        <Table fixedHeader={true} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Word</TableHeaderColumn>
                    <TableHeaderColumn>Translation</TableHeaderColumn>
                    <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {words.map(word => <WordRow word={word} onRemove={onWordRemove} onEditStart={onEditStart} />)}
            </TableBody>
        </Table>
    );
};

WordsTable.propTypes = {
    words: React.PropTypes.array.isRequired,
    editKey: React.PropTypes.string.isRequired,
    onWordRemove: React.PropTypes.func.isRequired,
    onEditStart: React.PropTypes.func.isRequired,
    onEditCancel: React.PropTypes.func.isRequired,
    onEditComplete: React.PropTypes.func.isRequired
};

export default WordsTable;