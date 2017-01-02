import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import WordRow from './word-row';
import WordRowEdit from './word-row-edit';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const iconButtonElement = (
  <IconButton touch={true} >
    <MoreVertIcon />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Remove</MenuItem>
  </IconMenu>
);

const WordsTable = ({words, editKey, onWordRemove, onEditStart, onEditCancel, onEditComplete}) => {
    return (
        <div>
            <Table fixedHeader={true} selectable={false} className="hidden-xs">
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Word</TableHeaderColumn>
                        <TableHeaderColumn>Translation</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover={true}>
                    {words.map(word => word.key !== editKey ? 
                        <WordRow word={word} onRemove={onWordRemove} onEditStart={onEditStart} key={word.key} /> :
                        <WordRowEdit word={word} onEditCancel={onEditCancel} onEditComplete={onEditComplete} key={word.key} />
                    )}
                </TableBody>
            </Table>
            <div className="visible-xs">
                <List>
                    {words.map(word => 
                        [<ListItem primaryText={word.value} secondaryText={word.translation} rightIconButton={rightIconMenu} key={word.key} />, 
                        <Divider />]
                    )}
                </List>
            </div>
        </div>
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