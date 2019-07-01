import {
    ACTION_ADD_CHIP,
    ACTION_REMOVE_CHIP,
    ACTION_REMOVE_MONEY,
    ACTION_ADD_MONEY,
    ACTION_DEAL_CARDS
} from "../data/constants";


export const addChip = (chip) => dispatch => {
    dispatch({
        type: ACTION_REMOVE_MONEY,
        payload: chip
    });
    dispatch({
        type: ACTION_ADD_CHIP,
        payload: chip
    });
};

export const removeChip = (chip) => dispatch => {
    if (chip) {
        dispatch({
            type: ACTION_ADD_MONEY,
            payload: chip
        });
        dispatch({
            type: ACTION_REMOVE_CHIP,
            payload: chip
        });
    }
};

export const dealCards = () => dispatch => {
    dispatch({
        type: ACTION_DEAL_CARDS,
        payload: 5
    });
};
   