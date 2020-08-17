import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { createWrapper } from 'next-redux-wrapper';

// eslint-disable-next-line no-unused-vars
const makeStore = () => createStore(rootReducer);

export const wrapper = createWrapper(makeStore, {debug: true});

// ,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
