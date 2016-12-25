import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wordsActions from '../../actions/dictionary-actions';
import WordList from './word-list';
import WordRowNew from './word-row-new';

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
                <div className="row">
                    <div className="col-md-4">
                        Word
                    </div>
                    <div className="col-md-4">
                        Translation
                    </div>
                    <div className="col-md-4">
                        Actions
                    </div>
                </div>

                <WordRowNew onSave={this.onWordAdded} />

                <WordList
                    words={this.props.words} 
                    editKey={this.props.editKey} 
                    onWordRemove={this.onWordRemove} 
                    onEditStart={this.onWordEditStart}
                    onEditCancel={this.onWordEditCancel}
                    onEditComplete={this.onWordEditComplete} />
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
