import React from 'react';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

import UserReducer from './User/user.reducer';

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: UserReducer,
});

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const asyncStore = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk)),
);

const persistor = persistStore(asyncStore);
// persistor.purge();

const Redux = props => {
  return (
    <Provider store={asyncStore}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default Redux;
