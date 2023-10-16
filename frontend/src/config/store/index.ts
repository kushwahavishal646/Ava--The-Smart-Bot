import { compose, applyMiddleware, createStore } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import RootAction from './RootAction';
import RootEpic from './RootEpic';
import RootState from './RootState';
import RootReducer from './RootReducer';

export type RootStateType = ReturnType<typeof RootReducer>;

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

const configureStore = () => {
  const middlewares = [epicMiddleware];
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(RootReducer, enhancer);
  return store;
};

const RootStore = configureStore();
epicMiddleware.run(RootEpic);
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export default RootStore;
