import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const sagaMiddlware = createSagaMiddleware({});
const middlewares = [sagaMiddlware];

const store = createStore(reducers,compose(applyMiddleware(...middlewares)));

sagaMiddlware.run(sagas);

export default store;