import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "../redux/counterSlice";
import authReducer from "./authSlice";
import menuReducer from "./menuSlice";
import toastReducer from "./toastSlice";
import orderSlice from "./orderSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  menu: menuReducer,
  toast: toastReducer,
  order: orderSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
