
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
let cmp = (process.env.REACT_APP_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? composeWithDevTools : compose

const store = createStore(rootReducer, cmp(applyMiddleware(thunk.withExtraArgument())));

export const initialRootState = {
    ...store.getState(),
}

export default store;
