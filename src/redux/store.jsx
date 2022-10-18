import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "../redux/counterSlice";
import userReducer from "./userSlice";
import menuReducer from "./menuSlice";
import toastReducer from "./toastSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  menu: menuReducer,
  toast: toastReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
