import React from 'react';
import WordsList from './words-list';
import WordsTable from './words-table';

class Words extends React.Component {
    render() {
        return (
            <div>
                <div className="hidden-xs">
                    <WordsTable
                        words={this.props.words}
                        editKey={this.props.editKey}
                        onWordRemove={this.props.onWordRemove}
                        onEditStart={this.props.onEditStart}
                        onEditCancel={this.props.onEditCancel}
                        onEditComplete={this.props.onEditComplete} />
                </div>
                <div className="visible-xs">
                    <WordsList words={this.props.words} />
                </div>
            </div>
        );
    }
}

Words.propTypes = {
    words: React.PropTypes.array.isRequired,
    editKey: React.PropTypes.string.isRequired,
    onWordRemove: React.PropTypes.func.isRequired,
    onEditStart: React.PropTypes.func.isRequired,
    onEditCancel: React.PropTypes.func.isRequired,
    onEditComplete: React.PropTypes.func.isRequired
};

export default Words;