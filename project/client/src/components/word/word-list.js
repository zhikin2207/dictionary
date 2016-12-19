import React from 'react';
import WordRow from './word-row';

const WordList = ({words}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Слово</th>
                    <th>Перевод</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {words.map(word => <WordRow word={word} key={word.id} />)}
            </tbody>
        </table>
    );
}

export default WordList;
