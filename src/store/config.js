import React from 'react';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import UserReducer from './User/user.reducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

const asyncStore = createStore(rootReducer, compose(applyMiddleware(thunk)));

const Redux = props => {
  return <Provider store={asyncStore}>{props.children}</Provider>;
};

export default Redux;
