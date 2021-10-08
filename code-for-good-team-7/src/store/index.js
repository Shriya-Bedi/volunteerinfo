import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// ===========================|| REDUX - MAIN STORE ||=========================== //

const store = createStore(reducer, applyMiddleware(thunk));
const persister = 'Demo';

export { store, persister };
