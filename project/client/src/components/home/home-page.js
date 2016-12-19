import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wordsActions from '../../actions/words-actions';
import WordList from '../word/word-list';

class HomePage extends React.Component {
    componentWillMount() {
        this.props.wordsActions.load();
    }

    render() {
        return (
            <div>
                <WordList words={this.props.words} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    wordsActions: bindActionCreators(wordsActions, dispatch)
});


const mapStateToProps = (state, ownProps) => {
    return {
        words: state.words
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
