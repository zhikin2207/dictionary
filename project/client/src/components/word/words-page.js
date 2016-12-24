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
        this.onWordChange = this.onWordChange.bind(this);
        this.onWordCancelChange = this.onWordCancelChange.bind(this);
        this.onWordSave = this.onWordSave.bind(this);
        this.onWordAdd = this.onWordAdd.bind(this);
    }

    componentDidMount() {
        this.props.dictionaryActions.load();
    }

    onWordRemove(key) {
        this.props.dictionaryActions.remove(key);
    }

    onWordChange(key) {
        this.props.dictionaryActions.wordEditStart(key);
    }

    onWordCancelChange() {
        this.props.dictionaryActions.wordEditCancel();
    }

    onWordSave(word) {
        this.props.dictionaryActions.update(word);
    }

    onWordAdd(word) {
        this.props.dictionaryActions.add(word);
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

                <WordRowNew onSave={this.onWordAdd} />

                <WordList
                    words={this.props.words} 
                    editKey={this.props.editKey} 
                    onWordRemove={this.onWordRemove} 
                    onWordChange={this.onWordChange}
                    onWordCancelChange={this.onWordCancelChange}
                    onWordSave={this.onWordSave} />
            </div>
        );
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
