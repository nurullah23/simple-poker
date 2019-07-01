import React from 'react';
import { connect } from 'react-redux';
import Stack from '../components/Stack.jsx';
import { removeChip } from '../actions/actions.js';

export const mapStateToProps = ({ bet }) => ({
    chips: bet.chips,
    amount: bet.total
});

export const mapDispatchToProps = ({
    onClick: removeChip
});

export default connect(mapStateToProps, mapDispatchToProps)(Stack);