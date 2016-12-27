import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import WordRow from './word-row';
import WordRowEdit from './word-row-edit';

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
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                {words.map(word => word.key !== editKey ? 
                    <WordRow word={word} onRemove={onWordRemove} onEditStart={onEditStart} key={word.key} /> :
                    <WordRowEdit word={word} onEditCancel={onEditCancel} onEditComplete={onEditComplete} key={word.key} />
                )}
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