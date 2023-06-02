import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';
// import { createFilter } from 'redux-persist-transform-filter';

// const saveWallet = createFilter('wallet', []);

const reducers = combineReducers(reducer);

const persistConfig = {
  key: 'browser-wallet',
  storage,
  whitelist: ['application'],
  transforms: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
