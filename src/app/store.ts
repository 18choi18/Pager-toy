import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import searchSlice from '../features/search/searchSlice';
import searchSaga from '../features/search/searchSaga';

const rootReducer = combineReducers({
  search: searchSlice,
});

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development',
});

sagaMiddleware.run(function* () {
  yield all([searchSaga()]);
});

export type RootState = ReturnType<typeof rootReducer>;
