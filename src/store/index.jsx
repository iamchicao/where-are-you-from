import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const sagaMiddlaware = createSagaMiddleware({});
const middlewares = [sagaMiddlaware];

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddlaware.run(sagas);

export default store;
