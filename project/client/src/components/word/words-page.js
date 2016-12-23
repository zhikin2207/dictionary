import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wordsActions from '../../actions/dictionary-actions';
import WordList from './word-list';

class WordsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onWordRemove = this.onWordRemove.bind(this);
        this.onWordChange = this.onWordChange.bind(this);
        this.onWordCancelChange = this.onWordCancelChange.bind(this);
    }

    componentWillMount() {
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

    render() {
        return (
            <div>
                <WordList 
                    words={this.props.words} 
                    editKey={this.props.editKey} 
                    onWordRemove={this.onWordRemove} 
                    onWordChange={this.onWordChange}
                    onWordCancelChange={this.onWordCancelChange} />
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
