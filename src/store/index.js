import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, initialState, compose(...enhancers));
let persistor = persistStore(store);

const configureStore = () => {
  return { store, persistor };
};

sagaMiddleware.run(sagas);

export default configureStore;
