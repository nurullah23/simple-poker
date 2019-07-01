import React from 'react';
import PropTypes from 'prop-types';
import cardBack from '../images/cards/back.svg';

const propTypes = {
    isOpen: PropTypes.bool,
    card: PropTypes.string,
    selected: PropTypes.bool
};

const defaultValues = {
    isOpen: false,
    card: '',
    selected: false
};

const Card = (isOpen, card, selected) => (
    <img
        src={isOpen ? cardBack : cardBack}
    />
);

Card.propTypes = propTypes;
Card.defaultValues = defaultValues;

export default Card;