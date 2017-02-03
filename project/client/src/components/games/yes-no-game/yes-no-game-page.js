import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import {red100, green100} from 'material-ui/styles/colors';

import * as gameActions from '../../../actions/game-actions';
import {GameStatus} from '../../../config';
import PaperMessage from '../../common/paper-message';

const renderWordRow = words => {
    const rowElements = [];

    for (let i = 0; i < words.length; i++) {
        const color = words[i].answerCorrect ? green100 : red100;

        rowElements.push(
            <ListItem 
                key={i} 
                primaryText={words[i].value} 
                secondaryText={words[i].translation}
                style={{ backgroundColor: color, margin: 1 }} />
        );
    }

    return rowElements;
};

class YesNoGamePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onYesClick = this.onYesClick.bind(this);
        this.onNoClick = this.onNoClick.bind(this);
    }

    componentDidMount() {
        this.props.gameActions.startGame();
    }

    render() {
        if (this.props.words.length === 0) {
            return (<div><PaperMessage text="Your wods list is empty" /></div>);
        }

        const word = this.props.words[this.props.index];

        return (
            <div>
                {this.props.gameStatus === GameStatus.InProgress && !!word &&
                    <div>
                        <div className="row center">
                            <h2>{this.props.index + 1} out of {this.props.words.length}</h2>
                            <h3>Correct: {this.props.correctCount} | Wrong: {this.props.wrongCount}</h3>
                        </div>
                        <div className="row">
                            <Paper className="paper col-md-offset-4 col-md-4 center">
                                <p>{word.value}</p>
                                <p>{word.translation}</p>

                                <RaisedButton label="Yes" primary={true} className="button" onClick={this.onYesClick} />
                                <RaisedButton label="No" secondary={true} className="button" onClick={this.onNoClick} />
                            </Paper>
                            <div className="col-md-offset-4 col-md-4">
                                <LinearProgress value={this.props.index} mode="determinate" max={this.props.words.length - 1} />
                            </div>
                        </div>
                    </div>
                }

                {this.props.gameStatus === GameStatus.Completed &&
                    <div className="row">
                        <Paper className="paper col-md-offset-4 col-md-4 center">
                            <h2>Your results</h2>
                            <List>
                                {renderWordRow(this.props.words)}
                            </List>
                        </Paper>
                    </div>
                }
            </div>
        );
    }

    onYesClick() {
        this.handleAnswer(true);
    }

    onNoClick() {
        this.handleAnswer(false);
    }

    handleAnswer(answer) {
        const correctAnswer = this.props.words[this.props.index].translationChanged !== answer;

        if (correctAnswer) {
            this.props.gameActions.setCorrectAnswer();
        } else {
            this.props.gameActions.setWrongAnswer();
        }

        if (this.props.words.length === this.props.index + 1) {
            this.props.gameActions.endGame();
        } else {
            this.props.gameActions.nextWord();
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    gameActions: bindActionCreators(gameActions, dispatch)
});


const mapStateToProps = (state) => ({
    words: state.game.words,
    index: state.game.index,
    gameStatus: state.game.status,
    correctCount: state.game.correctCount,
    wrongCount: state.game.wrongCount
});

export default connect(mapStateToProps, mapDispatchToProps)(YesNoGamePage);