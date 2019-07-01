import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chips.scss';
import Chip from './Chip.jsx';
import { CHIP_VALUES } from '../data/constants';

const propTypes = {
    money: PropTypes.number,
    onClick: PropTypes.func
};

const defaultProps = {
    money: 50,
    onClick: () => {}
};

const Chips = ({ money, onClick }) => (
    <div className="chips-container">
    {CHIP_VALUES.filter(chip => chip <= money).slice(-4).map((chip, i) => (
        <Chip
            value={chip}
            onClick={onClick}
            key={i} />
    ))}
    </div>
);

Chips.propTypes = propTypes;
Chips.defaultProps = defaultProps;

export default Chips;