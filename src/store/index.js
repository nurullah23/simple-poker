import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialStateValue = {
    money: 100,
    bet: {
        total: 0,
        chips: []
    }
};

const logger = store => next => action => {
    console.log('previous state', store.getState())
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger, thunk)
    );
};