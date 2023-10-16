import { createStore } from 'redux';

import RootReducer from '../config/store/RootReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createTestStore = (preloadedState: any) => {
  const store = createStore(RootReducer, preloadedState);

  return store;
};

export default createTestStore;
