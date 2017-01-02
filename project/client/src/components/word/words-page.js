import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import * as wordsActions from '../../actions/dictionary-actions';
import NewWordForm from './new-word-form/new-word-form';
import WordsTable from './words/words-table';

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
                <Paper className="paper">
                    <p className="subtitle">New word</p>
                    <NewWordForm onAdd={this.onWordAdded} />
                </Paper>

                <Paper className="paper">
                    {this.props.words.length > 0 &&
                        <WordsTable
                            words={this.props.words} 
                            editKey={this.props.editKey} 
                            onWordRemove={this.onWordRemove} 
                            onEditStart={this.onWordEditStart}
                            onEditCancel={this.onWordEditCancel}
                            onEditComplete={this.onWordEditComplete} />
                    }

                    {this.props.words.length === 0 && 
                        <p className="subtitle">Your words list is empty</p>
                    }
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
    uid: state.user.uid,
    wordsLoading: state.dictionary.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(WordsPage);