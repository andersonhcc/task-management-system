import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from "./ducks/root-reducer";
import mySaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware as Middleware));

sagaMiddleware.run(mySaga);

export default store;
