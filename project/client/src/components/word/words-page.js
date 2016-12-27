import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wordsActions from '../../actions/dictionary-actions';
import WordsTable from './words-table';
import WordList from './word-list';
import NewWordForm from './new-word/new-word-form';
import Paper from 'material-ui/Paper';

const paperStyle = {
    padding: 18,
    margin: 24
};

class WordsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onWordRemove = this.onWordRemove.bind(this);
        this.onWordEditStart = this.onWordEditStart.bind(this);
        this.onWordEditCancel = this.onWordEditCancel.bind(this);
        this.onWordEditComplete = this.onWordEditComplete.bind(this);
        this.onWordAdded = this.onWordAdded.bind(this);
    }

    componentDidMount() {
        this.props.dictionaryActions.load();
    }

    render() {
        return (
            <div>
                <Paper zDepth={1} style={paperStyle}>
                    <NewWordForm onAdd={this.onWordAdded} />
                </Paper>

                <Paper zDepth={1} style={paperStyle}>
                    <WordsTable
                        words={this.props.words} 
                        editKey={this.props.editKey} 
                        onWordRemove={this.onWordRemove} 
                        onEditStart={this.onWordEditStart}
                        onEditCancel={this.onWordEditCancel}
                        onEditComplete={this.onWordEditComplete} />
                </Paper>
            </div>
        );
    }

    onWordRemove(key) {
        this.props.dictionaryActions.remove(key);
    }

    onWordEditStart(key) {
        this.props.dictionaryActions.wordEditStart(key);
    }

    onWordEditCancel() {
        this.props.dictionaryActions.wordEditCancel();
    }

    onWordEditComplete(word) {
        this.props.dictionaryActions.update(word);
    }

    onWordAdded(word) {
        this.props.dictionaryActions.add(word);
    }
}

const mapDispatchToProps = (dispatch) => ({
    dictionaryActions: bindActionCreators(wordsActions, dispatch)
});


const mapStateToProps = (state) => ({
    words: state.dictionary.words,
    editKey: state.dictionary.editKey,
    uid: state.user.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(WordsPage);