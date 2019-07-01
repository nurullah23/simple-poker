import { ACTION_ADD_CHIP, ACTION_REMOVE_CHIP, ACTION_CLEAR_CHIPS } from "../data/constants";

const initialState = {
    total: 0,
    chips: []
};

export default (state = initialState, { type, payload }) => {
    const { total, chips } = state;
    switch (type) {
        case ACTION_ADD_CHIP:
            return {
                total: total + payload,
                chips: [
                    ...chips,
                    payload
                ]
            };

        case ACTION_REMOVE_CHIP:
            chips.pop();
            return {
                total: total - payload,
                chips
            };

        case ACTION_CLEAR_CHIPS:
            return {
                total: 0,
                chips: []
            };

        default:
            return state;
    }
}