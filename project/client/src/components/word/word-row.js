import React from 'react';

const WordRow = ({word}) => {
    return (
        <tr>
            <td>{word.value}</td>
            <td>{word.translation}</td>
            <td>
                <a href="#">Изменить</a>
                {' | '}
                <a href="#">Удалить</a> 
            </td>
        </tr>
    );
};

export default WordRow;
