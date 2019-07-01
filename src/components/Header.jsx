import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.scss';

const propTypes = {
    money: PropTypes.number
}

const defaultProps = {
    money: 100
}

const Header = ({ money }) => (
    <div className="status-header">
        <span className="money-display">&euro;&nbsp;{money}</span>
    </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;