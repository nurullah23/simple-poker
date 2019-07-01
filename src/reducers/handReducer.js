import { ACTION_DEAL_CARDS } from "../data/constants";
import { dealCards } from "../actions/actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_DEAL_CARDS:
            return dealCards(payload);

        default:
            return state;
    }
}