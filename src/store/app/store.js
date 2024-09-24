import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { commentsApi } from "../services/coments";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Root reducer combining different slices
const rootReducer = combineReducers({
  [commentsApi.reducerPath]: commentsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      commentsApi.middleware
    )
});

setupListeners(store.dispatch);

