import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chip.scss';

const propTypes = {
    value: PropTypes.number,
    onClick: PropTypes.func
}

const defaultProps = {
    value: 1,
    onClick: () => {}
}

const Chip = ({ value, onClick }) => (
    value && (
        <img
            className="chip"
            src={`../images/chips/${value}.svg`}
            onClick={() => onClick(value)} />
    )
);

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;