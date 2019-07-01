import React from 'react';
import { connect } from 'react-redux';
import { removeChip } from '../actions/actions.js';
import ActionButtons from '../components/ActionButtons.jsx';

export const mapStateToProps = ({ bet: { total } }) => ({
    canDeal: total > 0,
    canFold: false,
    canChange: false,
    gameEnded: false
});

export const mapDispatchToProps = ({
    dealCards: () => {},
    changeCards: () => {},
    fold: () => {},
    startNewGame: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);