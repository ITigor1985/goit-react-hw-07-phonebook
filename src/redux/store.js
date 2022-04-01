import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contactsBook',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
