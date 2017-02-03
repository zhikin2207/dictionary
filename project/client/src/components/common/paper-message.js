import React from 'react';
import Paper from 'material-ui/Paper';

const PaperMessage = ({ text }) => (
    <Paper className="paper">
        <p className="subtitle">{text}</p>
    </Paper>
);

export default PaperMessage;