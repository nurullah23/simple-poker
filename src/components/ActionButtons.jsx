import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ActionButtons.scss';

const propTypes = {
    canDeal: PropTypes.bool,
    canFold: PropTypes.bool,
    canChange: PropTypes.bool,
    gameEnded: PropTypes.bool,
    dealCards: PropTypes.func,
    changeCards: PropTypes.func,
    fold: PropTypes.func,
    startNewGame: PropTypes.func
};

const defaultValues = {
    canDeal: false,
    canFold: false,
    canChange: false,
    gameEnded: false,
    dealCards: () => {},
    changeCards: () => {},
    fold: () => {},
    startNewGame: () => {}
};

const ActionButtons = ({
        canDeal,
        canFold,
        canChange,
        gameEnded,
        dealCards,
        changeCards,
        fold,
        startNewGame
    }) => (
    <div className="action-buttons">
        { canFold && (<button onClick={() => fold()}>Fold</button>)}
        { canChange && (<button onClick={() => changeCards()}>Deal</button>)}
        { canDeal && (<button onClick={() => dealCards()}>Deal</button>)}
        { gameEnded && (<button onClick={() => startNewGame()}>Start New Game</button>)}
    </div>
);

ActionButtons.propTypes = propTypes;
ActionButtons.defaultValues = defaultValues;

export default ActionButtons;