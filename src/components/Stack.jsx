import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Stack.scss'
import Chip from './Chip.jsx';

const propTypes = {
    amount: PropTypes.number,
    chips: PropTypes.array,
    onClick: PropTypes.func
}

const defaultProps = {
    amount: 0,
    chips: [],
    onClick: () => {}
}

const Stack = ({ amount, chips, onClick }) => (
    <div className="chip-stack">
        {chips.length !== 0 && (
            <div className="chips"
                onClick={() => onClick(chips[chips.length - 1])}>
                {chips.map((chip, i) => (
                    <Chip
                        value={chip}
                        key={i} />
                ))}
            </div>
        )}
        
        <span className="bet-amount">&euro;&nbsp;{amount}</span>
    </div>
);

Stack.propTypes = propTypes;
Stack.defaultProps = defaultProps;

export default Stack;