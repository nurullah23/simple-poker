import { ACTION_ADD_CHIP, ACTION_REMOVE_CHIP, ACTION_CLEAR_CHIPS } from "../data/constants";

const initialState = 100;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_ADD_CHIP:
            return state - payload;

        case ACTION_REMOVE_CHIP:
            return state + payload;

        case ACTION_CLEAR_CHIPS:
            return 0;

        default:
            return state;
    }
};