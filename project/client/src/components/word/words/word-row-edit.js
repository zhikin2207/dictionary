import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class WordRow extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.word.value,
            translation: props.word.translation
        };

        this.onSave = this.onSave.bind(this);
        this.onValueChanged = this.onValueChanged.bind(this);
        this.onTranslationChanged = this.onTranslationChanged.bind(this);
    }

    componentDidMount() {
        this._firstElement.focus();
    }

    render() {
        return (
            <TableRow>
                <TableRowColumn>
                    <TextField 
                        name="value" 
                        value={this.state.value} 
                        onChange={this.onValueChanged} 
                        fullWidth={true} 
                        ref={_ => this._firstElement = _}/>
                </TableRowColumn>
                <TableRowColumn>
                    <TextField 
                        name="translation" 
                        value={this.state.translation} 
                        onChange={this.onTranslationChanged} 
                        fullWidth={true} />
                </TableRowColumn>
                <TableRowColumn>
                    <RaisedButton label="Save" primary={true} onClick={this.onSave} className="button" />
                    <RaisedButton label="Cancel" secondary={true} onClick={this.props.onEditCancel} className="button" />
                </TableRowColumn>
            </TableRow>
        );
    }

    onSave() {
        if (this.state.value && this.state.translation) {
            const word = {
                key: this.props.word.key,
                value: this.state.value,
                translation: this.state.translation
            };

            this.props.onEditComplete(word);
        } else {
            this.props.onEditCancel();
        }
    }

    onValueChanged(event) {
        this.setState({
            value: event.target.value
        });
    }

    onTranslationChanged(event) {
        this.setState({
            translation: event.target.value
        });
    }
}

WordRow.propTypes = {
    word: React.PropTypes.object.isRequired,
    onEditCancel: React.PropTypes.func.isRequired,
    onEditComplete: React.PropTypes.func.isRequired
};

export default WordRow;
